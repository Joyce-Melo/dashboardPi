import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaFixaReadComponent } from './despesa-fixa-read.component';

describe('DespesaFixaReadComponent', () => {
  let component: DespesaFixaReadComponent;
  let fixture: ComponentFixture<DespesaFixaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaFixaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaFixaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
