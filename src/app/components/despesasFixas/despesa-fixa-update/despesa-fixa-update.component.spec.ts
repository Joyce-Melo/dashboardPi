import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFixaUpdateComponent } from './despesa-fixa-update.component';

describe('DespesaFixaUpdateComponent', () => {
  let component: DespesaFixaUpdateComponent;
  let fixture: ComponentFixture<DespesaFixaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaFixaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaFixaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
