import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMoon } from '@/app/components/ui/icon/icon-moon.component';

describe('IconMoon', () => {
  let component: IconMoon;
  let fixture: ComponentFixture<IconMoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMoon],
    }).compileComponents();

    fixture = TestBed.createComponent(IconMoon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
