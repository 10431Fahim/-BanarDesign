import { Component, OnInit } from '@angular/core';
import * as apex from 'ng-apexcharts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  activeTab:string = 'Home';
   onTabClick(tab: string){
     this.activeTab = tab;
   }
   series!: apex.ApexAxisChartSeries;
   chart!: apex.ApexChart;
   title!: apex.ApexTitleSubtitle;
   legend!: apex.ApexLegend;
 
   ngOnInit(): void {
     this.initializeChartOptions();
   }
 
   private initializeChartOptions(): void {
     this.title = {
       text: 'Popular Languages'
     };
 
     this.series = [{
       name: 'Java',
       data: [12, 10, 19]
     }, {
       name: 'Python',
       data: [23, 18, 20]
     }];
 
     this.chart = {
       type: 'bar',
       width:'90%',
       toolbar:{
        show: false
      }
     };
 
     this.legend = {
       show: true,
       position: 'top',
       horizontalAlign: 'left',
       showForSingleSeries: true,
       onItemClick: {
         toggleDataSeries: false
       }
     };
   }
   }
