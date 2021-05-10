import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaReadComponent } from './renda-read.component';

describe('RendaReadComponent', () => {
  let component: RendaReadComponent;
  let fixture: ComponentFixture<RendaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
