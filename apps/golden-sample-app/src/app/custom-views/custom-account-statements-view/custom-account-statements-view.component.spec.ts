import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomAccountStatementsViewComponent } from './custom-account-statements-view.component';

describe('CustomAccountStatementsViewComponent', () => {
  let component: CustomAccountStatementsViewComponent;
  let fixture: ComponentFixture<CustomAccountStatementsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomAccountStatementsViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomAccountStatementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
