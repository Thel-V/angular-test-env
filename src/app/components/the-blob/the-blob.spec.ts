import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBlob } from './the-blob';

describe('TheBlob', () => {
  let component: TheBlob;
  let fixture: ComponentFixture<TheBlob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBlob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBlob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
