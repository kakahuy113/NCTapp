import { Component, OnInit } from '@angular/core';
import { Sing, DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detail: Sing;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.detail =  this.dataService.getSong(id);
      
    });
  }
 

}
