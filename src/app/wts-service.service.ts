import { Injectable } from '@angular/core';
import { Observer, ReplaySubject } from 'rxjs';

@Injectable()
export class WtsServiceService {
  resultSubject: ReplaySubject<any> = new ReplaySubject(1);
  constructor() { }
  public handleCallBack() {
    return this.resultSubject;
  }
  public triggerCallBack() {
    this.resultSubject.next({});
  }
}
