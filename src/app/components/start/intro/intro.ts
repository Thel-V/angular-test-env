import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-intro',
  imports: [],
  template: `
    <div class="intro-container">
      <div class="intro-card" #tiltCard>
        <div class="i-c-hole"></div>
        <div class="i-c-company"><img src="images/rotstein-logo.png" alt="company-img"></div> 
        <div class="i-c-top">
          <div class="i-c-bump"></div>
          <div class="i-c-portrait"><img src="images/placeholder.png" alt="portrait-img"></div>
          <h1>
            Georgi Ruderman
          </h1>
        </div>
        <div class="i-c-bottom">
          <div class="i-c-b-left">
            <p class="card-info">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div class="i-c-b-right">
            <img src="images/qr.png" alt="qr-code-img">
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
      perspective: 1000px;
    }

    .intro-card {
      width: 1100px;
      height: 550px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      transform-style: preserve-3d;
      position: relative;
      border-radius: 2rem;
      padding: 1rem;
      box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.25);
      border-radius: 25px;
      background: rgba(54, 48, 69, 0.1); 
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      border-top: 1px solid rgba(150, 150, 150, 1); 
      border-left: 1px solid rgba(150, 150, 150, 1);
      border-right: 1px solid rgba(150, 150, 150, 1);
      border-bottom: 1px solid rgba(150, 150, 150, 1);
      backdrop-filter: blur(5px);
      filter: blur(0.04rem);
    }
    
    .i-c-hole{
      position: absolute;
      top: 15px;
      border: 1px solid rgba(150, 150, 150, 1);
      border-radius: 60px;
      width: 200px;
      height: 40px;
    }

    .i-c-top{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
    }

    .i-c-top h1{
      font-size: 3.5rem;
    }

    .i-c-bottom{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      outline: 2px solid blue;
    }

    img[alt="qr-code-img"]{
      width: 200px;
      border-radius: 35px;
    }

    img[alt="company-img"]{
      width: 80px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    img[alt="portrait-img"]{
      width: 150px;
      border-radius: 15px;
      margin-right: 1rem;
    }
  `
})
export class Intro implements AfterViewInit {
  @ViewChild('tiltCard') tiltCard!: ElementRef;

  ngAfterViewInit() {
    VanillaTilt.init(this.tiltCard.nativeElement, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.3

    });
  }
}