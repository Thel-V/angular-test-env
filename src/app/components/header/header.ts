import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
       <header #headerEl class="header">
        <div class="header-left">
            <div class="logo">
                <a href="/home">
                    <img src="images/placeholder.png" alt="logo">
                </a>
            </div>
        </div>

        <nav>
            <ul>
                <div class="nav-w-dots">
                    <div class="fields" id="nav-home-field">
                        <div class="dots" id="nav-home-dot"></div>
                        <li><a href="/home" id="nav-home-button">Start</a></li>
                    </div>
                    <div class="fields" id="nav-hey-field">
                        <div class="dots" id="nav-hey-dot"></div>
                        <li><a href="/hey" id="nav-hey-button">Hey</a></li>
                    </div>
                    <div class="fields" id="nav-test-field">
                        <div class="dots" id="nav-test-dot"></div>
                        <li><a href="/test" id="nav-test-button">test</a></li>
                    </div>
                </div>
            </ul>
        </nav>
    </header>
  `,
  styles: `
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #202020;
    border-bottom: 2px solid #d4d4d4;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    will-change: transform;
    transition: height 0.1s ease, padding 0.1s ease;
}

header .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 380px;
}

.logo img{
    height: 120px;
}

.nav-w-dots {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: max-content;
}

.fields {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin: 20px;
}

header .dots {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background-color: gray;
}

header ul {
    list-style: none;
}

nav a {
    color: #fff;
    padding: 10px;
    background-color: #000;
    border-radius: 5px;
    border: #fff 2px solid;
    transition: 0.2s;
}

nav a:hover {
    color: #c3c3c3;
    background-color: #2f2f2f;
    border: #000 2px solid;
}

nav a:active {
    background-color: #d4d4d4;
    color: #131313;
}
  `
})
export class Header implements AfterViewInit {
  @ViewChild('headerEl') headerEl!: ElementRef<HTMLElement>;
  ngAfterViewInit() {
    this.updateHeaderHeight();
  }

  private updateHeaderHeight() {
    const height = Math.ceil(this.headerEl.nativeElement.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--header-height', `${height + 80}px`);
  }
}