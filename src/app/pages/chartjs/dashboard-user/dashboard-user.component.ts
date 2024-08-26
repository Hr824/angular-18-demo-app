import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { Subscription } from 'rxjs';
import { ChartService } from '../../../services/chart.service';
import Chart from 'chart.js/auto';
import { VenteMensuelle } from '../../../models/vente';

const months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

@Component({
  selector: 'app-dashboard-user',
  standalone: true,
  imports: [BreadcrumbComponent, LoaderComponent],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.css'
})
export class DashboardUserComponent implements OnInit, OnDestroy {

  theme: string = 'Chart.js';
  page: string = 'Dashboard';

  currentMonthAndYear = signal<string>('');
  
  subscriptions: Subscription = new Subscription();

  chartService = inject(ChartService);

  chartVentesMensuelles: any = [];
  labels: string[] = []; //['Janvier', 'Février', 'Mars', ...]
  values: number[] = []; //[6.5, 7.5, 10, ...]

  chartVendeurs: any = [];
  chartProduits: any = [];


  ngOnInit(): void {

    const today = new Date();
    this.currentMonthAndYear.set(months[today.getMonth()] + ' ' + today.getFullYear());

    this.createVentesMensuellesChart();
    this.createVendeursChart();
    this.createProduitsChart();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  createVentesMensuellesChart(): void {

    this.subscriptions.add(this.chartService.getVentesMensuelles().subscribe({
      next: response => {
        //console.log(response);
        this.labels = response.map((item: VenteMensuelle) => item.month);
        this.values = response.map((item: VenteMensuelle) => item.value);

        const canvas = document.getElementById('canvasVentesMensuelles') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const background_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        background_gradient.addColorStop(0.4, 'orange');
        background_gradient.addColorStop(1, 'purple');

        this.chartVentesMensuelles = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: 'CA (€)',
                data: this.values,
                borderWidth: 1,
                backgroundColor: background_gradient
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chiffre d\'affaire mensuel 2024'
              },
              tooltip: {
                displayColors: false,
                callbacks: {
                  label: ((tooltipItem) => {
                    let label = ''
                    if (tooltipItem.parsed.y !== null) {
                      label = tooltipItem.parsed.y + ' €'
                  }
                    return label;
                  })
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }));
  }

  createVendeursChart(): void {

    const canvas = document.getElementById('canvasVendeurs') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const data = {
      labels: ['Sophie', 'Thomas', 'Juliette'],
      datasets: [{
        data: [11200.00, 11850.50, 5044.50],
        borderWidth: 1,
        backgroundColor: [
          'rgb(251, 157, 190)',
          'purple',
          'green'
        ],
        hoverOffset: 4
      }]
    };

    this.chartVendeurs = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            displayColors: false,
            callbacks: {
              label: ((tooltipItem) => {
                let label = ''
                if (tooltipItem.parsed !== null) {
                  label = tooltipItem.parsed + ' €'
              }
                return label
              })
            }
          }
        }
      }
    });
  }


  createProduitsChart(): void {

    const canvas = document.getElementById('canvasProduits') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const data = {
      labels: ['Produit 1', 'Produit 2', 'Produit 3', 'Produit 4', 'Produit 5', 'Produit 6'],
      datasets: [{
        label: '',
        data: [4200.00, 1735.50, 3502.58, 5106.59, 960.34, 2965.45],
        borderWidth: 1,
        backgroundColor: [
          'rgb(178,216,216)',
          'rgb(102,178,178)',
          'rgb(0,150,150)',
          'rgb(0,128,128)',
          'rgb(0,102,102)',
          'rgb(0,76,76)',
        ]
      }]
    };

    this.chartProduits = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              boxWidth: 0
            }
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              label: ((tooltipItem) => {
                let label = ''
                if (tooltipItem.parsed !== null) {
                  label = tooltipItem.parsed.x + ' €'
              }
                return label
              })
            }
          }
        }
      }
    });
  }
}