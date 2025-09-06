import { Component } from '@angular/core';
import { Intro } from './intro/intro';

@Component({
  selector: 'app-start',
  imports: [Intro],
  template: `
    <div class="start-container">
      <app-intro />
      <!-- <app-description /> -->
      <!-- <app-focus /> -->
      <!-- <app-projects /> -->
      
    </div>
  `,
  styles: `
    .start-container {
      outline: 5px solid #ff000024;
      width: 1100px;
      height: 1500px;
      display: flex;
      justify-content: center;
    }
  `
})
export class Start {

}
