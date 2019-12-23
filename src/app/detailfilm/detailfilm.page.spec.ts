import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailfilmPage } from './detailfilm.page';

describe('DetailfilmPage', () => {
  let component: DetailfilmPage;
  let fixture: ComponentFixture<DetailfilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailfilmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailfilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
