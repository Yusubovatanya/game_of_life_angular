import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GridService {
  range: number[];
  mas: number[];
  size: number;
  foo = [];

  constructor() {
  }

  getRange(size) {
    this.size = size;
    return this.range = Array(size).fill(null).map((x, i) => i);
  }

  getMas() {
    let arr = [];
    for (var i = 0; i < this.range.length; i++) {
      arr[i] = [];
      for (var j = 0; j < this.range.length; j++) {
        arr[i][j] = 0;
      }
    }
    this.mas = arr;
    return this.mas
  }

  choseElement(event) {
    let x = event.path[1].rowIndex;
    let y = event.path[0].cellIndex;
    this.mas[x][y] = 1;
    return this.mas
  }

  borderM(value) {
    if ((value - 1) < 0) {
      return this.size - 1;
    } else {
      return value - 1
    }
  }

  borderP(value) {
    if ((value + 1) >= this.size) {
      return 0;
    } else {
      return value + 1;
    }
  }


  play() {
    this.foo = this.mas.map(function (arr: any) {
      return arr.slice();
    });

    this.foo.forEach((item, i) => {
      this.foo.forEach((item, j) => {
        if (this.foo[i][j] === 1) {
          let newborns = 0;
          if (this.foo[this.borderM(i)][this.borderM(j)] === 1) newborns++;
          if (this.foo[this.borderM(i)][j] === 1) newborns++;
          if (this.foo[this.borderM(i)][this.borderP(j)] === 1) newborns++;
          if (this.foo[i][this.borderM(j)] === 1) newborns++;
          if (this.foo[i][this.borderP(j)] === 1) newborns++;
          if (this.foo[this.borderP(i)][this.borderM(j)] === 1) newborns++;
          if (this.foo[this.borderP(i)][j] === 1) newborns++;
          if (this.foo[this.borderP(i)][this.borderP(j)] === 1) newborns++;
          if (newborns > 3) {
            this.mas[i][j] = 0;
          }
          if (newborns < 2) {
            this.mas[i][j] = 0;
          }
        };

        if (this.foo[i][j] === 0) {
          let newborns = 0;
          if (this.foo[this.borderM(i)][this.borderM(j)] === 1) newborns++;
          if (this.foo[this.borderM(i)][j] === 1) newborns++;
          if (this.foo[this.borderM(i)][this.borderP(j)] === 1) newborns++;
          if (this.foo[i][this.borderM(j)] === 1) newborns++;
          if (this.foo[i][this.borderP(j)] === 1) newborns++;
          if (this.foo[this.borderP(i)][this.borderM(j)] === 1) newborns++;
          if (this.foo[this.borderP(i)][j] === 1) newborns++;
          if (this.foo[this.borderP(i)][this.borderP(j)] === 1) newborns++;
          if (newborns === 3) {
            this.mas[i][j] = 1;
          }
        };
      })
    })
    return this.mas
  }


  reset() {
    this.mas.forEach((item, i) => {
      this.mas.forEach((item, j) => {
        this.mas[i][j] = 0;
      })
    })
    return this.mas;
  }

  randomPlay() {
    this.mas.forEach((item, i) => {
      this.mas.forEach((item, j) => {
        this.mas[i][j] = Math.round(Math.random());
      })
    })
    return this.mas;
  }

}
