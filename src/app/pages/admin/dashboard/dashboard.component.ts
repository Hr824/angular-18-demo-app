import { Component, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import Chart from 'chart.js/auto';
import { ChartService } from '../../../services/chart.service';
import { Temperature } from '../../../models/temperature';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  theme = signal<string>('Admin');
  page = signal<string>('Dashboard');

  subscriptions: Subscription = new Subscription();

  chartService = inject(ChartService);

  chartLineTemperatures: any = [];
  chartBarTemperatures: any = [];
  labels: string[] = []; //['Janvier', 'Février', 'Mars', ...]
  values: number[] = []; //[6.5, 7.5, 10, ...]

  ngOnInit(): void {
    this.createLineChart();
    this.createBarChart();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  createLineChart(): void {

    this.subscriptions.add(this.chartService.getTemperatures().subscribe({
      next: response => {
        // console.log(response);
        this.labels = response.map((item: Temperature) => item.month);
        this.values = response.map((item: Temperature) => item.value);

        const canvas = document.getElementById('canvasLineTemperatures') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const background_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        background_gradient.addColorStop(0.4, '#f4094e');
        background_gradient.addColorStop(1, '#8c12f0');


        this.chartLineTemperatures = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: 'Tmoyenne (°C)',
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
                display: false,
                position: 'top',
              },
              title: {
                display: true,
                text: 'Températures mensuelles moyennes (°C) en 2023 à Paris'
              },
              tooltip: {
                displayColors: false,
                callbacks: {
                  label: ((tooltipItem) => {
                    let label = ''
                    if (tooltipItem.parsed.y !== null) {
                      label = tooltipItem.parsed.y + ' °C'
                  }
                    return label
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


  createBarChart(): void {

    this.subscriptions.add(this.chartService.getTemperatures().subscribe({
      next: response => {
        // console.log(response);
        this.labels = response.map((item: Temperature) => item.month);
        this.values = response.map((item: Temperature) => item.value);

        const canvas = document.getElementById('canvasBarTemperatures') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const background_gradient = ctx.createLinearGradient(0, 0, 0, 200);
        background_gradient.addColorStop(0.4, 'purple');
        background_gradient.addColorStop(1, 'orange');


        this.chartBarTemperatures = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.labels,
            datasets: [
              {
                label: 'Tmoyenne (°C)',
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
                display: false,
                position: 'top',
              },
              title: {
                display: true,
                text: 'Températures mensuelles moyennes (°C) en 2023 à Paris'
              },
              tooltip: {
                displayColors: false,
                callbacks: {
                  label: ((tooltipItem) => {
                    let label = ''
                    if (tooltipItem.parsed.y !== null) {
                      label = tooltipItem.parsed.y + ' °C'
                  }
                    return label
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
}
