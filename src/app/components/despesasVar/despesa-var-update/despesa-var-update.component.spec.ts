import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaVarUpdateComponent } from './despesa-var-update.component';

describe('DespesaVarUpdateComponent', () => {
  let component: DespesaVarUpdateComponent;
  let fixture: ComponentFixture<DespesaVarUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaVarUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaVarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
