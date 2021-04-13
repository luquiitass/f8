import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedListComponent } from './red-list.component';

describe('RedListComponent', () => {
  let component: RedListComponent;
  let fixture: ComponentFixture<RedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
