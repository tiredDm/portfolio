import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaMapComponent } from './drogheda-map.component';

describe('DroghedaMapComponent', () => {
  let component: DroghedaMapComponent;
  let fixture: ComponentFixture<DroghedaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
