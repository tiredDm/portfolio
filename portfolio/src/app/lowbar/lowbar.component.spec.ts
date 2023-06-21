import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LowbarComponent } from './lowbar.component';

describe('LowbarComponent', () => {
  let component: LowbarComponent;
  let fixture: ComponentFixture<LowbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
