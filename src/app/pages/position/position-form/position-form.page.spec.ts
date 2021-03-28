import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PositionFormPage } from './position-form.page';

describe('PositionFormPage', () => {
  let component: PositionFormPage;
  let fixture: ComponentFixture<PositionFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
