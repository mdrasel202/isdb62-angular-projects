import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewControllerComponent } from './admin-view-controller.component';

describe('AdminViewControllerComponent', () => {
  let component: AdminViewControllerComponent;
  let fixture: ComponentFixture<AdminViewControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
