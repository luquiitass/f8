import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedesFormPage } from './redes-form.page';

describe('RedesFormPage', () => {
  let component: RedesFormPage;
  let fixture: ComponentFixture<RedesFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedesFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
