import {Injectable} from '@angular/core';
import {Observable, of, interval, Subject} from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const counts = ["KA 51 NO 1441","KA 01 MJ 7571"," "];
var counter = 0;

@Injectable()
export class DashGraphLPService {
  
  private refresh = interval(5000);

  $subject: Subject<any> = new Subject();

  constructor() {
    this.refresh.subscribe(() =>
      this.fetch()
    );
  }


  fetch() {
    this.$subject.next(counts[counter]);
    counter++;
    if(counter==counts.length){
      counter = 0;
    }
  }

  public getSubject(): Subject<any> {
    return this.$subject;
  }

}
