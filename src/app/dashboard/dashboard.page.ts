import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import {
  provideCharts,
  withDefaultRegisterables,
  BaseChartDirective,
} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  imports: [
    IonList,
    IonItem,
    IonContent,
    IonTitle,
    IonLabel,
    BaseChartDirective,
  ],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class DashboardPage {
  userName: string = 'paulo';
  totalSale: string = 'R$ 1000';
  totalProfit: string = 'R$ 300';
  totalProducts: string = '27';

  barChartLabels: string[] = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [12, 19, 7, 2, 1, 30, 20],
        label: 'Vendas',
        borderRadius: 10,
        backgroundColor: "#ec5c8d",
      },
    ],
  };
  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  constructor() {}
}
