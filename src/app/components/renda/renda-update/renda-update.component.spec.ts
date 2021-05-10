import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaUpdateComponent } from './renda-update.component';

describe('RendaUpdateComponent', () => {
  let component: RendaUpdateComponent;
  let fixture: ComponentFixture<RendaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
