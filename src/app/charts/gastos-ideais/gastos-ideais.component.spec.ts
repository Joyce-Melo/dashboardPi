import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosIdeaisComponent } from './gastos-ideais.component';

describe('GastosIdeaisComponent', () => {
  let component: GastosIdeaisComponent;
  let fixture: ComponentFixture<GastosIdeaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosIdeaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosIdeaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
