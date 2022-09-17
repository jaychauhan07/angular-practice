import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaployeeFormComponent } from './emaployee-form.component';

describe('EmaployeeFormComponent', () => {
  let component: EmaployeeFormComponent;
  let fixture: ComponentFixture<EmaployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaployeeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
