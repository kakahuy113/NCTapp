import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SongTabPage } from './song-tab.page';

describe('SongTabPage', () => {
  let component: SongTabPage;
  let fixture: ComponentFixture<SongTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
