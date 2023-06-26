import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaRimouthComponent } from './drogheda-rimouth.component';

describe('DroghedaRimouthComponent', () => {
  let component: DroghedaRimouthComponent;
  let fixture: ComponentFixture<DroghedaRimouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaRimouthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaRimouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
