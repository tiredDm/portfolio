import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaRiverideComponent } from './drogheda-riveride.component';

describe('DroghedaRiverideComponent', () => {
  let component: DroghedaRiverideComponent;
  let fixture: ComponentFixture<DroghedaRiverideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaRiverideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaRiverideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
