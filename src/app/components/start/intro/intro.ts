import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  template: `
    <div class="intro-container">
      <div class="intro-card">
        <div class="i-c-portrait"><img src="" alt="portrait-img"></div>
        <div class="i-c-hole"></div>
        <div class="i-c-company"><img src="" alt="company-img"></div>
        <div class="i-c-bump"></div>
        <div class="i-c-top">
          <h1 class="card-name">
            Georgi Ruderman
          </h1>
        </div>
        <div class="i-c-bottom">
          <div class="i-c-b-left">
            <p class="card-info">
              lorem  ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div class="i-c-b-right">
            <img src="" alt="qr-code-img">
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .intro-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1100px;
    }

    .intro-card{
      outline: 2px solid red;
      width: 1100px;
      height: 550px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  `
})
export class Intro {

}
