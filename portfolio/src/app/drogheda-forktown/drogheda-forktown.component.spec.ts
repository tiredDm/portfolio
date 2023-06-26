import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaForktownComponent } from './drogheda-forktown.component';

describe('DroghedaForktownComponent', () => {
  let component: DroghedaForktownComponent;
  let fixture: ComponentFixture<DroghedaForktownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaForktownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaForktownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
