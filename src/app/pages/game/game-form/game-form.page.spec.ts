import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameFormPage } from './game-form.page';

describe('GameFormPage', () => {
  let component: GameFormPage;
  let fixture: ComponentFixture<GameFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
