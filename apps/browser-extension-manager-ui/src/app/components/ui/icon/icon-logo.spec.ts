import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLogo } from '@/app/components/ui/icon/icon-logo.component';

describe('IconLogo', () => {
  let component: IconLogo;
  let fixture: ComponentFixture<IconLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(IconLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
