import { Component, OnInit } from '@angular/core';
import { DataService, Sing } from '../services/data.service';

@Component({
  selector: 'app-song-tab',
  templateUrl: './song-tab.page.html',
  styleUrls: ['./song-tab.page.scss'],
})
export class SongTabPage implements OnInit {
  songs: Sing[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.songs = this.dataService.getSongs();
    /* this.dataService.ABCXYZ(); */
    console.log(this.dataService.groupSongs);
  }

}
