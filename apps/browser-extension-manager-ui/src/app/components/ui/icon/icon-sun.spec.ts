import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSun } from '@/app/components/ui/icon/icon-sun.component';

describe('IconSun', () => {
  let component: IconSun;
  let fixture: ComponentFixture<IconSun>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSun],
    }).compileComponents();

    fixture = TestBed.createComponent(IconSun);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
