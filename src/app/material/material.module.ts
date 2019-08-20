import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatGridListModule, MatSliderModule, MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class MaterialModule {
}
