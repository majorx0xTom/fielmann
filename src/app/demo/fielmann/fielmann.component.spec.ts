import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FielmannComponent } from './fielmann.component';

describe('FielmannComponent', () => {
  let component: FielmannComponent;
  let fixture: ComponentFixture<FielmannComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FielmannComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FielmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
