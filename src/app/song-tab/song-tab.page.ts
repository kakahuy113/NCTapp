import { Component, OnInit } from '@angular/core';
import { DataService, Sing } from '../services/data.service';

@Component({
  selector: 'app-song-tab',
  templateUrl: './song-tab.page.html',
  styleUrls: ['./song-tab.page.scss'],
})
export class SongTabPage implements OnInit {
  songs: Sing[];
  searchText: string = ''
  search = false;
  groupSongs = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.songs = this.dataService.getSongs();
    this.ABCXYZ(this.songs);
  }

  ABCXYZ(song) {
    const sortedSongs = this.songs.sort(function(a,b){
      var lccomp = a.Name.toLowerCase().localeCompare(b.Name.toLowerCase());
      return lccomp ? lccomp : a.Name > b.Name ? 1 : a.Name < b.Name ? -1 : 0;
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

  change() {
    this.search = false;
  }

  searchSong(song) {
    this.search = true;

    const val = song.target.value

    if(val && val.trim() !== '' ) {
      this.songs = [...this.songs.filter(data => {
        return (data.Name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })]; 
    }
    if(val === '' ) {
      this.search = false
      this.songs = this.dataService.getSongs();
    }
  }
}
