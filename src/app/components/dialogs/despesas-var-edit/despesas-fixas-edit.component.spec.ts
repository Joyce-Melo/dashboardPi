import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasFixasEditComponent } from './despesas-fixas-edit.component';

describe('DespesasFixasEditComponent', () => {
  let component: DespesasFixasEditComponent;
  let fixture: ComponentFixture<DespesasFixasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesasFixasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesasFixasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
