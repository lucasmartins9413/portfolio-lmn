import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkLightToggleComponent } from './dark-light-toggle.component';

describe('DarkLightToggleComponent', () => {
  let component: DarkLightToggleComponent;
  let fixture: ComponentFixture<DarkLightToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkLightToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkLightToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
