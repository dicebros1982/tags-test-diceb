import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTagListComponent } from './main-tag-list.component';

describe('MainTagListComponent', () => {
  let component: MainTagListComponent;
  let fixture: ComponentFixture<MainTagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
