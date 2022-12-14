import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigerenComponent } from './irrigeren.component';

describe('IrrigerenComponent', () => {
  let component: IrrigerenComponent;
  let fixture: ComponentFixture<IrrigerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrigerenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
