import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFixaDeleteComponent } from './despesa-fixa-delete.component';

describe('DespesaFixaDeleteComponent', () => {
  let component: DespesaFixaDeleteComponent;
  let fixture: ComponentFixture<DespesaFixaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaFixaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaFixaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
