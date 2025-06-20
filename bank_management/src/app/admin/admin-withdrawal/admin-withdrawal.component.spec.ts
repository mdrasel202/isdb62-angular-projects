import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWithdrawalComponent } from './admin-withdrawal.component';

describe('AdminWithdrawalComponent', () => {
  let component: AdminWithdrawalComponent;
  let fixture: ComponentFixture<AdminWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminWithdrawalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
