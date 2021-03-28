import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminGamePage } from './admin-game.page';

describe('AdminGamePage', () => {
  let component: AdminGamePage;
  let fixture: ComponentFixture<AdminGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
