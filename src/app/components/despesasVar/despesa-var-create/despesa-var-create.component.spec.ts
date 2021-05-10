import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaVarCreateComponent } from './despesa-var-create.component';

describe('DespesaVarCreateComponent', () => {
  let component: DespesaVarCreateComponent;
  let fixture: ComponentFixture<DespesaVarCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaVarCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaVarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
