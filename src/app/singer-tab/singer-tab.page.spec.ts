import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingerTabPage } from './singer-tab.page';

describe('SingerTabPage', () => {
  let component: SingerTabPage;
  let fixture: ComponentFixture<SingerTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingerTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingerTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
