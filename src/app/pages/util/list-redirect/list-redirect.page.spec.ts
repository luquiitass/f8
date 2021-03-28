import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListRedirectPage } from './list-redirect.page';

describe('ListRedirectPage', () => {
  let component: ListRedirectPage;
  let fixture: ComponentFixture<ListRedirectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRedirectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListRedirectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
