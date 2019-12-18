import { Component, OnInit } from '@angular/core';
import { DataService, Sing } from '../services/data.service';

@Component({
  selector: 'app-song-tab',
  templateUrl: './song-tab.page.html',
  styleUrls: ['./song-tab.page.scss'],
})
export class SongTabPage implements OnInit {
  songs: Sing[];

  groupSongs = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.songs = this.dataService.getSongs();
    this.ABCXYZ(this.songs)
    
  }

  ABCXYZ(song) {
    const sortedSongs = this.songs.sort( (a, b) => {
      if (a.Name > b.Name) {return 1; }
      if (a.Name < b.Name) { return -1; }
      return 0;
    });
    let currentLetter = '';
    let currentSongs = [];
    let currentId = '';
    let currentContent = '';
    sortedSongs.forEach((value , index) => {
      if (value.Name.charAt(0) !== currentLetter) {
        currentLetter = value.Name.charAt(0);
        currentId = value.Id;
        currentContent = value.content;
        const newGroup = {
          letter: currentLetter,
          Id: currentId,
          content: currentContent,
          song: []
        };

        currentSongs = newGroup.song;
        this.groupSongs.push(newGroup);
      }

      currentSongs.push(value);
    });
  }

}
