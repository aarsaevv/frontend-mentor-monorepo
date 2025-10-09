import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotButton } from '@/app/components/ui/button/slot-button.component';

describe('SlotButton', () => {
  let component: SlotButton;
  let fixture: ComponentFixture<SlotButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SlotButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
