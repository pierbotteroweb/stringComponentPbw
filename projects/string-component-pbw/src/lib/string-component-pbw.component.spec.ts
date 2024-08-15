import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringComponentPbwComponent } from './string-component-pbw.component';

describe('StringComponentPbwComponent', () => {
  let component: StringComponentPbwComponent;
  let fixture: ComponentFixture<StringComponentPbwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringComponentPbwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringComponentPbwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
