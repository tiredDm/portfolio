import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaForresonComponent } from './drogheda-forreson.component';

describe('DroghedaForresonComponent', () => {
  let component: DroghedaForresonComponent;
  let fixture: ComponentFixture<DroghedaForresonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaForresonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaForresonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
