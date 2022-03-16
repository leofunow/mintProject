import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpClientsComponent } from './corp-clients.component';

describe('CorpClientsComponent', () => {
  let component: CorpClientsComponent;
  let fixture: ComponentFixture<CorpClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
