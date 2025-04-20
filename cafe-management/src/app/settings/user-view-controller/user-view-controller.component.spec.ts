import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewControllerComponent } from './user-view-controller.component';

describe('UserViewControllerComponent', () => {
  let component: UserViewControllerComponent;
  let fixture: ComponentFixture<UserViewControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserViewControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
