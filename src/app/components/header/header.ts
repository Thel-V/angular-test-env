import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
       <header #headerEl class="header">
        <div class="header-left">
          <div class="logo">
            <a href="/">
                <img src="images/placeholder.png" alt="logo">
            </a>
          </div>
        </div>

        <nav>
          <ul>
          <div class="nav-w-dots">
            <div class="fields" id="nav-start-field">
              <div class="dots" id="nav-start-dot"></div>
              <li><a routerLink="/" id="nav-start-button">Start</a></li>
            </div>
            <div class="fields" id="nav-hey-field">
              <div class="dots" id="nav-hey-dot"></div>
              <li><a routerLink="/hey" id="nav-hey-button">Hey</a></li>
            </div>
            <div class="fields" id="nav-test-field">
              <div class="dots" id="nav-test-dot"></div>
              <li><a routerLink="/test" id="nav-test-button">test</a></li>
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    will-change: transform;
    transition: height 0.1s ease, padding 0.1s ease;
}

  header.scrolled {
    padding: 10px 20px;
  }

  header .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 380px;
    transition: width 0.2s ease;
  }

  header.scrolled .left {
    width: 330px;
  }

  .logo img {
    height: 120px;
    transition: height 0.1s ease;
  }

  header.scrolled .logo img {
    height: 80px;
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

  .fields.active .dots {
    background-color: #1db954;
  }

  .fields.active a {
    color: #c3c3c3;
    background-color: #2f2f2f;
    border: #000 2px solid;
  }
  `
})
export class Header implements AfterViewInit {
  @ViewChild('headerEl') headerEl!: ElementRef<HTMLElement>;
  private scrollThreshold = 70; 

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.updateHeaderHeight();
    
    fromEvent(window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe(() => {
        this.onWindowScroll();
      });
      
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateActiveNav(event.url);
      });
      
    setTimeout(() => {
      this.updateActiveNav(this.router.url);
    }, 0);
  }

  private onWindowScroll() {
    if (window.scrollY > this.scrollThreshold) {
      this.headerEl.nativeElement.classList.add('scrolled');
    } else {
      this.headerEl.nativeElement.classList.remove('scrolled');
    }
  }

  private updateHeaderHeight() {
    const height = Math.ceil(this.headerEl.nativeElement.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--header-height', `${height + 80}px`);
  }
  
  private updateActiveNav(url: string) {

    const fields = document.querySelectorAll('.fields');
    fields.forEach(field => field.classList.remove('active'));
    
    if (url === '/' || url.startsWith('/?')) {
      document.getElementById('nav-start-field')?.classList.add('active');
    } else if (url.startsWith('/hey')) {
      document.getElementById('nav-hey-field')?.classList.add('active');
    } else if (url.startsWith('/test')) {
      document.getElementById('nav-test-field')?.classList.add('active');
    }
  }
}