import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaHopetonComponent } from './drogheda-hopeton.component';

describe('DroghedaHopetonComponent', () => {
  let component: DroghedaHopetonComponent;
  let fixture: ComponentFixture<DroghedaHopetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaHopetonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaHopetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
