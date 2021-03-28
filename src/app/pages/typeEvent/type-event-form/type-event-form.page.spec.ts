import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeEventFormPage } from './type-event-form.page';

describe('TypeEventFormPage', () => {
  let component: TypeEventFormPage;
  let fixture: ComponentFixture<TypeEventFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEventFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeEventFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
