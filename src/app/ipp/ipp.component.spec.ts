import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IppComponent } from './ipp.component';

describe('IppComponent', () => {
  let component: IppComponent;
  let fixture: ComponentFixture<IppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
