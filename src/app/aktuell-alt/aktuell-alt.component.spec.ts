import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktuellAltComponent } from './aktuell-alt.component';

describe('AktuellAltComponent', () => {
  let component: AktuellAltComponent;
  let fixture: ComponentFixture<AktuellAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktuellAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktuellAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
