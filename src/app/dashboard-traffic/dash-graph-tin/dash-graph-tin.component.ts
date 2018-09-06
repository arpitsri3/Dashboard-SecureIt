import { Component, OnInit,ViewChild } from '@angular/core';
import { DashGraphTinService } from './dash-graph-tin.service';
import { Observable, of, interval } from 'rxjs';
import * as shape from 'd3-shape';


@Component({
  selector: 'app-dash-graph-tin',
  templateUrl: './dash-graph-tin.component.html',
  styleUrls: ['./dash-graph-tin.component.css']
})
export class DashGraphTinComponent implements OnInit {


  curve: any = shape.curveBasis; 

  single_1: any[] = [
    {
      name: 'Count',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    }
  ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Traffic Count';
  timeline = false;

  colorScheme = {
    domain: ['#00e676AA', '#ff1744AA', '#2979ffAA', '#AAAAAA']
  };



  // line, area
  autoScale = true;

  constructor(private dashGraphTinService: DashGraphTinService) {

  }

 update(time: Date, area1) {
    var area = this.single_1[0]['series']
    if (area.length > 15) {
      this.single_1[0]['series'].shift();
    }
    var name = "" + time.getSeconds();
    this.single_1[0]['series'].push({ name: name, value: area1 })
    // console.log(this.single_1, area.length)
    this.single_1 = [...this.single_1]
}


  onSelect(event) {
    // console.log(event);
  }



  ngOnInit() {
    this.dashGraphTinService.getSubject().subscribe((value: any[]) => {
      this.update(value[0], Number(value[1]));
    });
  }
}