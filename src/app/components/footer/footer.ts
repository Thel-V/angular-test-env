import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <div class="info-box" >
    <div class="ib-top">
      <ul>
        <li><a href="/impressum">Impressum</a></li>
        <li><a href="/ueber">Über uns</a></li>
          <li><a href="/legal">Rechtliches & Richtlinien</a></li>
          <li><a href="/cookies">Cookies</a></li>
      </ul>
    </div>
    <div class="bottom-box-seperator"></div> <!-- SEPERATOR -->
    <div class="ib-bot">
      <p>&copy; 2025 Rudermann Werke</p>
      <p>Hansastraße 1, 90441 Nürnberg</p>
    </div>
    <div class="BTTTB" #btttb><a href="javascript:void(0)" (click)="scrollToTop()"><img src="images/btttb.png" alt="btttb-logo"></a></div>
    <!-- <div class="BTTTB-cup">
      <div class="cup-shaft"></div>
      <div class="cup-end"></div>
    </div> no hope-->
  </div>
  `,
  styles: `
  .info-box{
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #131313;
    padding: 0px 100px;
}

.info-box ul{
    text-decoration: none;
    list-style: none;
}

.ib-top li{
    margin: 5px;
}

.ib-top a{
    color: #999;
    transition: 0.3s;
}

.ib-top a:hover{
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #1db954;
}

.ib-top{
    width: 1000px;
    padding: 0px 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.ib-top{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.bottom-box-seperator{
    width: 700px;
    border: 2px solid #363837;
    border-radius: 10px;
}

.ib-bot{
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0px 200px;
}

.ib-bot p{
  color: #999;
}

.BTTTB {
  position: fixed;
  bottom: 5%;
  right: 8%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  z-index: 1000;
  background-color: #ffffff;
  border-radius: 50%;
  border: 5px solid #ffffffff;
  transition:  0.4s;
}

.BTTTB:hover {
  background-color: #cacacaff;
  border: 5px solid #939393ff;
}

.BTTTB.show {
  opacity: 1;
  visibility: visible;
}

.BTTTB a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.BTTTB img{
  width: 70px;
  animation:  pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
  `
})
export class Footer {
  @ViewChild('btttb') btttb!: ElementRef;
  private scrollThreshold = 70;

  ngOnInit() {
    fromEvent(window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe(() => {
        this.onWindowScroll();
      });
  }

  private onWindowScroll() {
    if (this.btttb) {
      if (window.scrollY > this.scrollThreshold) {
        this.btttb.nativeElement.classList.add('show');
      } else {
        this.btttb.nativeElement.classList.remove('show');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0});
  }
}