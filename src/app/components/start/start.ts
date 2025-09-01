import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  template: `
    <p>
      start works!
    </p>
    <p>
      start works!
    </p>
    <p>
      start works!
    </p>
    <p>
      start works!
    </p>
    <p>
      start works!
    </p>
    <p>
      start works!
    </p>
    
  `,
  styles: `
  p{
    font-size: 150px;
  }

  body, .content {
    margin-top: var(--header-height, 200px); /* default fallback */
  }

  `
})
export class Start {

}
