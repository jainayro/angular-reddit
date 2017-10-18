import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditBodyComponent } from './reddit-body.component';

describe('RedditBodyComponent', () => {
  let component: RedditBodyComponent;
  let fixture: ComponentFixture<RedditBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
