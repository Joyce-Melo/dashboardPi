import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosReaisComponent } from './gastos-reais.component';

describe('GastosReaisComponent', () => {
  let component: GastosReaisComponent;
  let fixture: ComponentFixture<GastosReaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosReaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosReaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
