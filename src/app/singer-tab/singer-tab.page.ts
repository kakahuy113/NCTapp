import { Component, OnInit } from '@angular/core';
import { DataService, Sing } from '../services/data.service';
@Component({
  selector: 'app-singer-tab',
  templateUrl: './singer-tab.page.html',
  styleUrls: ['./singer-tab.page.scss'],
})
export class SingerTabPage implements OnInit {
  sings: Sing[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.sings = this.dataService.getSongs()
  }

}
