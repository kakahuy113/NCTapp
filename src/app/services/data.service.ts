import { Injectable } from '@angular/core';

export interface Sing {
  Id: string;
  Name: string;
  Singer: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sings: Sing[] = [
    {
      "Id": "1412145502",
      "Name": "Cách Biệt",
      "Singer": "Đặng Thế Luân",
      "image": "dangtheluan.jpg"
     },
    {
        "Id": "1412134502",
        "Name": "Anh Còn Nợ Em",
        "Singer": "Quang Dũng",
        "image": "quangdung.jpg"
    },
    {
        "Id": "1412134520",
        "Name": "Anh Het Nợ Em",
        "Singer": "Quang Dũng",
        "image": "quangdung.jpg"
    },
    {
        "Id": "1412144501",
        "Name": "Gặp Nhau Trong Rùng Mơ",
        "Singer": "Trọng Tấn, Tân Nhàn",
        "image": "trongtan.jpg"
    },
    {
        "Id": "1412143332",
        "Name": "Đáp Mộ Cuộc Tình",
        "Singer": "Đan Nguyên",
        "image": "dangnguyen.jpg"
    }
];
groupSongs = [];
  constructor() {
    this.ABCXYZ(this.sings);
   }
   ABCXYZ(song) {
    const sortedSongs = this.sings.sort( (a, b) => {
      if (a.Name > b.Name) {return 1; }
      if (a.Name < b.Name) { return -1; }
      return 0;
    });
    let currentLetter = '';
    let currentSongs = [];

    sortedSongs.forEach((value , index) => {
      if (value.Name.charAt(0) !== currentLetter) {
        currentLetter = value.Name.charAt(0);

        const newGroup = {
          letter: currentLetter,
          song: []
        };

        currentSongs = newGroup.song;
        this.groupSongs.push(newGroup);
      }

      currentSongs.push(value);
    });
  }
  getSongs() {
    return [...this.sings];
  }

  getSong(id) {
    return {...this.sings.find(Song => {
      return Song.Id === id;
    })};
  }
}
