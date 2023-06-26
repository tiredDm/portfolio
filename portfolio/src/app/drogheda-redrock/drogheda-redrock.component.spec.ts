import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DroghedaRedrockComponent } from './drogheda-redrock.component';

describe('DroghedaRedrockComponent', () => {
  let component: DroghedaRedrockComponent;
  let fixture: ComponentFixture<DroghedaRedrockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroghedaRedrockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroghedaRedrockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
