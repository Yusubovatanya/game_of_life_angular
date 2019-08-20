import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private playControls = new Subject<any>();
  private resetControls = new Subject<any>();
  private randomControls = new Subject<any>();

  play$ = this.playControls.asObservable();
  reset$ = this.resetControls.asObservable();
  random$ = this.randomControls.asObservable();


  play() {
    this.playControls.next()
  }

  resetPlay() {
    this.resetControls.next()
  }

  getRandomValue() {
    this.randomControls.next()
  }

}
