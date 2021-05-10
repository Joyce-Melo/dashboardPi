import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaVarDeleteComponent } from './despesa-var-delete.component';

describe('DespesaVarDeleteComponent', () => {
  let component: DespesaVarDeleteComponent;
  let fixture: ComponentFixture<DespesaVarDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaVarDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaVarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
