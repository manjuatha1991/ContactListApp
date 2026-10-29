import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListAppComponent } from './user-list-app.component';

describe('UserListAppComponent', () => {
  let component: UserListAppComponent;
  let fixture: ComponentFixture<UserListAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
