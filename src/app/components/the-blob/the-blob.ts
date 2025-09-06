import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-the-blob',
  imports: [],
  template: `
    <div class="blob-follower"></div>
  `,
  styles: `
    .blob-follower {
      position: fixed;
      top: 0;
      left: 0;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(29, 185, 84, 0.7) 0%, rgba(29, 185, 84, 0.3) 40%, rgba(29, 185, 84, 0) 70%);
      filter: blur(250px);
      pointer-events: none;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease-out;
      z-index: -1;
    }
  `
})
export class TheBlob implements OnInit, OnDestroy {
  private mouseMoveListener: (() => void) | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.mouseMoveListener = this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      const blob = document.querySelector('.blob-follower');
      if (blob) {
        this.renderer.setStyle(blob, 'left', `${event.clientX}px`);
        this.renderer.setStyle(blob, 'top', `${event.clientY}px`);
      }
    });
  }

  ngOnDestroy() {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
  }
}