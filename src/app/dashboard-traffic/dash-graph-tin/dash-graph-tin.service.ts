import {Injectable} from '@angular/core';
import {Observable, of, interval, Subject} from 'rxjs';
import {Http, Response} from '@angular/http';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 17, 17, 17, 18, 19, 20, 20, 20, 21, 22, 23, 23, 24, 25, 26, 27, 27, 27, 28, 28, 28, 28, 29, 29, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 38, 38, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 49, 50, 50, 50, 50, 50, 50, 50, 50, 51, 51, 52];
var counter = 0;

@Injectable()
export class DashGraphTinService {


  private refresh = interval(1000);

  $subject: Subject<any[]> = new Subject();

  constructor() {
    this.refresh.subscribe(() =>
      this.fetch()
    );
  }


  fetch() {
    const crowd = [new Date(), counts[counter]];
    this.$subject.next(crowd);
    counter++;
    if(counter==counts.length){
      counter = 0;
    }
  }

  public getSubject(): Subject<any[]> {
    return this.$subject;
  }

}
