import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisesListComponent } from './crises-list.component';

describe('CrisesListComponent', () => {
  let component: CrisesListComponent;
  let fixture: ComponentFixture<CrisesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
