import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Temperature } from '../../../models/temperature';
import { ChartService } from '../../../services/chart.service';
import { LoaderComponent } from '../../../components/shared/loader/loader.component';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-temperature-chart',
  standalone: true,
  imports: [BreadcrumbComponent, LoaderComponent],
  templateUrl: './temperature-chart.component.html',
  styleUrl: './temperature-chart.component.css'
})
export class TemperatureChartComponent implements OnInit, OnDestroy {
  
  theme = signal<string>('Chart.js');
  page = signal<string>('Bar Chart');

  subscriptions: Subscription = new Subscription();

  chartService = inject(ChartService);

  chartTemperatures: any = [];
  labels: string[] = []; //['Janvier', 'Février', 'Mars', ...]
  values: number[] = []; //[6.5, 7.5, 10, ...]

  ngOnInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  createChart(): void {

    this.subscriptions.add(this.chartService.getTemperatures().subscribe({
      next: response => {
        // console.log(response);
        this.labels = response.map((item: Temperature) => item.month);
        this.values = response.map((item: Temperature) => item.value);

        const canvas = document.getElementById('canvasTemperatures') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const background_gradient = ctx.createLinearGradient(0, 0, 0, 300);
        background_gradient.addColorStop(0.4, '#f4094e');
        background_gradient.addColorStop(1, '#8c12f0');


        this.chartTemperatures = new Chart(ctx, {
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
                position: 'top',
              },
              title: {
                display: true,
                text: 'Températures mensuelles moyennes en 2023 à Paris'
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