import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MdePopoverModule} from '@material-extended/mde';
import {TimeAgoPipe} from 'time-ago-pipe';
import {ChartsModule} from 'ng2-charts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {RouterModule, Routes} from '@angular/router';
import {WebcamModule} from 'ngx-webcam';
import {HttpModule} from '@angular/http';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';


import {AppComponent} from './app.component';
import {AccessbarComponent} from './accessbar/accessbar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AccessAccountComponent} from './accessbar/access-account/access-account.component';
import {NavitemComponent} from './navbar/navitem/navitem.component';
import {AccessAlertComponent} from './accessbar/access-alert/access-alert.component';
import {AccessItemComponent} from './accessbar/access-item/access-item.component';
import {AccountService} from './services/account.service';
import {AlertService} from './services/alert.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashStatusComponent} from './dashboard/dash-status/dash-status.component';
import {DashStatusService} from './dashboard/dash-status/dash-status.service';
import {DashGraphComponent} from './dashboard/dash-graph/dash-graph.component';
import {HttpService} from './services/http.service';
import {DashGraphService} from './dashboard/dash-graph/dash-graph.service';
import {DashBarChartComponent} from './dashboard/dash-bar-chart/dash-bar-chart.component';
import {DashBarChartService} from './dashboard/dash-bar-chart/dash-bar-chart.service';
import {DashGaugeComponent} from './dashboard/dash-gauge/dash-gauge.component';
import {DashPiegridComponent} from './dashboard/dash-piegrid/dash-piegrid.component';
import {DashDonutComponent} from './dashboard/dash-donut/dash-donut.component';
import {DashboardAirportComponent} from './dashboard-airport/dashboard-airport.component';
import {DashboardDetectionComponent} from './dashboard-detection/dashboard-detection.component';
import {DashboardCrowdComponent} from './dashboard-crowd/dashboard-crowd.component';
import {DashGraphInComponent} from './dashboard-crowd/dash-graph-in/dash-graph-in.component';
import {DashGraphInService} from './dashboard-crowd/dash-graph-in/dash-graph-in.service';
import {DashboardTrespassingComponent} from './dashboard-trespassing/dashboard-trespassing.component';
import {DashGraphTinComponent} from './dashboard-traffic/dash-graph-tin/dash-graph-tin.component';
import {DashGraphTinService} from './dashboard-traffic/dash-graph-tin/dash-graph-tin.service';
import {DashboardTrafficComponent} from './dashboard-traffic/dashboard-traffic.component';
import {DashboardLPComponent} from './dashboard-lp/dashboard-lp.component';
import {DashGraphLPService} from './dashboard-lp/dash-lp.service';
import {APP_BASE_HREF} from '@angular/common';


const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/airport', component: DashboardAirportComponent},
  {path: 'dashboard/detection', component: DashboardDetectionComponent},
  {path: 'dashboard/crowd', component: DashboardCrowdComponent},
  {path: 'dashboard/crowd', component: DashboardCrowdComponent},
  {path: 'dashboard/trespassing', component: DashboardTrespassingComponent},
  {path: 'dashboard/traffic', component: DashboardTrafficComponent},
  {path: 'dashboard/lp', component: DashboardLPComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    NgxChartsModule,
    ChartsModule,
    MatGridListModule,
    MatListModule,
    MdePopoverModule,
    MatTooltipModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BrowserModule,
    // FormsModule, 
    WebcamModule,
    MatToolbarModule,
    MatIconModule,
    // ReactiveFormsModule, 
    // FormsModule, 
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  declarations: [
    TimeAgoPipe,
    AppComponent,
    AccessbarComponent,
    NavbarComponent,
    AccessAccountComponent,
    NavitemComponent,
    AccessAlertComponent,
    AccessItemComponent,
    DashboardComponent,
    DashStatusComponent,
    DashGraphComponent, DashboardLPComponent, DashboardTrafficComponent, DashGraphTinComponent, DashBarChartComponent, DashGaugeComponent, DashPiegridComponent, DashDonutComponent, DashboardAirportComponent, DashboardDetectionComponent, DashboardCrowdComponent, DashboardTrespassingComponent, DashGraphInComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AccountService,
    AlertService,
    DashStatusService, HttpService, DashGraphService, DashBarChartService, DashGraphTinService, DashGraphLPService, DashGraphInService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppModule {
}

// export class AppRoutingModule { }


