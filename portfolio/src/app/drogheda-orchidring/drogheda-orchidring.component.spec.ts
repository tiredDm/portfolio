import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaOrchidringComponent } from './drogheda-orchidring.component';

describe('DroghedaOrchidringComponent', () => {
  let component: DroghedaOrchidringComponent;
  let fixture: ComponentFixture<DroghedaOrchidringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaOrchidringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaOrchidringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
