import { Component, OnInit } from '@angular/core';
import { ControlsService } from './controls.service';
import { AppService } from '../app.service';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  max: number = 10;
  min: number = 1;
  step: number = 1;
  valueSpeed: number = 1;
  thumbLabel: boolean = true;
  isPlay: boolean = true;
  interval: any;
  source: any;
  subscription: any;
  constructor(public controlsService: ControlsService, public appService: AppService ) { }

  ngOnInit() {
  }

  reset(event) {
    this.appService.resetPlay();
    this.isPlay = true;
  }

  play() {
    this.source = interval((1/this.valueSpeed) * 1000);
    this.subscription = this.source.pipe(
      filter(() => {
        return !this.isPlay;
      })
    )
    .subscribe(() => this.appService.play()); 
    this.isPlay = !this.isPlay;
  }

  random() {
    this.appService.getRandomValue();
    this.isPlay = true;
  }

  getSpeed(event) {
    this.valueSpeed = event.value;
    if(!this.isPlay) {
      this.play();
      this.isPlay = !this.isPlay;
    }
  }
}
