import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFixaCreateComponent } from './despesa-fixa-create.component';

describe('DespesaFixaCreateComponent', () => {
  let component: DespesaFixaCreateComponent;
  let fixture: ComponentFixture<DespesaFixaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaFixaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaFixaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
