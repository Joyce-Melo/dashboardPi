import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaVarReadComponent } from './despesa-var-read.component';

describe('DespesaVarReadComponent', () => {
  let component: DespesaVarReadComponent;
  let fixture: ComponentFixture<DespesaVarReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaVarReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaVarReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
