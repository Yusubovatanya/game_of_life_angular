import {Component, OnInit} from '@angular/core';
import { GridService } from './grid.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  size: number = 32
  mas: number[];
  range: number[];

  constructor(public gridService: GridService, public appService: AppService) {
    appService.play$.subscribe(
      () => {
        this.gridService.play()
    });

    appService.reset$.subscribe(
      () => {
        this.mas = this.gridService.reset()
    });

    appService.random$.subscribe(
      () => {
        this.gridService.randomPlay()
    });
 }

  ngOnInit() { 
    this.range = this.gridService.getRange(this.size);
    this.mas = this.gridService.getMas()
  }

  choseElement(event) {
    this.gridService.choseElement(event);
  }

}
