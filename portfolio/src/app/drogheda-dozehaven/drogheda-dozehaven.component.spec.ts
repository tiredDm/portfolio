import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaDozehavenComponent } from './drogheda-dozehaven.component';

describe('DroghedaDozehavenComponent', () => {
  let component: DroghedaDozehavenComponent;
  let fixture: ComponentFixture<DroghedaDozehavenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaDozehavenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaDozehavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
