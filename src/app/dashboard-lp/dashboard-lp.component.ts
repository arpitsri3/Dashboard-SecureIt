import { Component, OnInit } from '@angular/core';
import { DashGraphLPService } from './dash-lp.service';
import { Observable, of, interval } from 'rxjs';

@Component({
  selector: 'app-dashboard-lp',
  templateUrl: './dashboard-lp.component.html',
  styleUrls: ['./dashboard-lp.component.css']
})
export class DashboardLPComponent implements OnInit {
 name: any = "";
  constructor(private dashGraphLPService: DashGraphLPService) { }
  
  update(license){
    this.name = license;
  }
  
  ngOnInit() {
    this.dashGraphLPService.getSubject().subscribe((value: any) => {
      this.update(value);
      });
  }

}
