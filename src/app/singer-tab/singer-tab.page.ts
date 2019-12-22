import { Component, OnInit } from '@angular/core';
import { DataService, Sing, newGroup} from '../services/data.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-singer-tab',
  templateUrl: './singer-tab.page.html',
  styleUrls: ['./singer-tab.page.scss'],
})

export class SingerTabPage implements OnInit {
  search = false;
  searchText: string = '';
  sings: Sing[];
  groupSinger: newGroup[] = [];
  constructor(
    private dataService: DataService, 
    private location: Location
    ) { }

  ngOnInit() {
    this.sings = this.dataService.getSongs();
    this.sortSinger(this.sings);
  }
  change() {
    this.search = true
    if(this.searchText=== '') {
      this.search = false
    }
  }
  
  sortSinger(song) {

    const sortsinger =  this.sings.sort(function(a,b){
     var lccomp = a.Singer.toLowerCase().localeCompare(b.Singer.toLowerCase());
     return lccomp ? lccomp : a.Singer > b.Singer ? 1 : a.Singer < b.Singer ? -1 : 0;
   });

   /* const sortsinger = this.sings.sort((a, b) => {
        if (a.Singer > b.Singer) {return 1; }
        if (a.Singer < b.Singer) {return -1; }
      return 0;
    }); */
    let currentLetter = '';
    let currentSinger = [];
    let currentId = '';
    let singer = ''
    sortsinger.forEach((value , index) => {
      if(value.Singer.charAt(0) !== currentLetter) {
        currentLetter = value.Singer.charAt(0);
        currentId = value.Id;
        singer = value.Singer
        const newGroup = {
          letter: currentLetter,
          song: [],
          Id: currentId,
          singer: singer
        }
        currentSinger = newGroup.song;
        this.groupSinger.push(newGroup);
      }
      currentSinger.push(value);
    });
  }
  
  searchSinger(singer) {
    this.search = true;
    var val = singer.target.value;

    if(val && val.trim() !== '') {
      this.sings = [...this.sings.filter( data => {
        return (data.Singer.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })]
    }
    if(val === '') {
      this.search = false;
      this.sings = this.dataService.getSongs();
    }
  }
}
