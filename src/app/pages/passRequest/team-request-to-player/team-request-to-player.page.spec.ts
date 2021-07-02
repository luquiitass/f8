import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamRequestToPlayerPage } from './team-request-to-player.page';

describe('TeamRequestToPlayerPage', () => {
  let component: TeamRequestToPlayerPage;
  let fixture: ComponentFixture<TeamRequestToPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRequestToPlayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamRequestToPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
