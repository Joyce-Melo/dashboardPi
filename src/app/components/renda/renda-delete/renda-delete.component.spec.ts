import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaDeleteComponent } from './renda-delete.component';

describe('RendaDeleteComponent', () => {
  let component: RendaDeleteComponent;
  let fixture: ComponentFixture<RendaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
