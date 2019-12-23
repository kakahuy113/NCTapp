import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detailfilm',
  templateUrl: './detailfilm.page.html',
  styleUrls: ['./detailfilm.page.scss'],
})
export class DetailfilmPage implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  film;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.film = this.getFilm(id).subscribe(data => {
        this.film = data;
        console.log(this.film);
        
      });
      
    })
  }

  getFilm(id) {
    return this.http.get(`https://swapi.co/api/films/${id}/`)
  }

}
