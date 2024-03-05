import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomAccountStatementTableContainerComponent } from './custom-account-statement-table-container.component';

describe('CustomAccountStatementTableContainerComponent', () => {
  let component: CustomAccountStatementTableContainerComponent;
  let fixture: ComponentFixture<CustomAccountStatementTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomAccountStatementTableContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CustomAccountStatementTableContainerComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
