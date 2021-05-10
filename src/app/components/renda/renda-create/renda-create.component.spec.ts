import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaCreateComponent } from './renda-create.component';

describe('RendaCreateComponent', () => {
  let component: RendaCreateComponent;
  let fixture: ComponentFixture<RendaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
