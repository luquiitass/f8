import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormPublicationPage } from './form-publication.page';

describe('FormPublicationPage', () => {
  let component: FormPublicationPage;
  let fixture: ComponentFixture<FormPublicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPublicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormPublicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
