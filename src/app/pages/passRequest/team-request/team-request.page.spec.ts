import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamRequestPage } from './team-request.page';

describe('TeamRequestPage', () => {
  let component: TeamRequestPage;
  let fixture: ComponentFixture<TeamRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
