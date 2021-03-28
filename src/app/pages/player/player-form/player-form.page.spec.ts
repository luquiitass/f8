import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerFormPage } from './player-form.page';

describe('PlayerFormPage', () => {
  let component: PlayerFormPage;
  let fixture: ComponentFixture<PlayerFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
