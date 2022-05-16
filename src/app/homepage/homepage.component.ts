import { Component, OnInit, NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { Router } from '@angular/router';
import { ChartType, ChartOptions } from 'chart.js';
// import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
// import { SingleDataSet, Label, monkeyPathChartJsLegend, monkeyPathChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  [x: string]: any;

  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'New Candidate'
    },
    {
      data: [120, 455, 100, 340],
      label: 'On Progress'
    },
    {
      data: [45, 67, 800, 500],
      label: 'On Progress'
    }
  ];

  chartLabels = [
    'January',
    'February',
    'March',
    'April'
  ];

  chartOptions = {
    responsive: true
  };

  onChartHover = ($event: any) => {
    window.console.log('onChartHover', $event);
  };

  onChartClick = ($event: any) => {
    window.console.log('onChartClick', $event);
  };

  newDataPoint(dataArr = [100, 100, 100], label: string) {
    this.chartData.forEach((dataset, index) => {
      this.chartData[index] = Object.assign({}, this.chartData[index], {
        data: [...this.chartData[index].data, dataArr[index]]
      });
    });

    this.chartLabels = [...this.chartLabels, label];
  }

  constructor(private router:Router) { }

  ngOnInit() {
    // var ctx = document.getElementById("myChart");
    // var myChart = new Chart(ctx, {});
  }

  goBack(){
    this.router.navigate(['login']);
 }

  // public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  // public pieChartData: SingleDataSet = [30, 50, 20];
  // public pieChartType: ChartType = 'pie';
  // public pieChartLegend = true;
  // public pieChartPlugins = [];
 
}
