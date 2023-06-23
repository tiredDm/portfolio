import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PixelartPageComponent } from './pixelart-page.component';

describe('PixelartPageComponent', () => {
  let component: PixelartPageComponent;
  let fixture: ComponentFixture<PixelartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixelartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PixelartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
