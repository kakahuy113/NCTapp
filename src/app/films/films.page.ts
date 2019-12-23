import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  listFilms= [];
  constructor(private http: HttpClient , private router: Router) { }
  searchText;
  list;
  ngOnInit() {
    this.getFilms().subscribe(film => {
      this.listFilms = film.results;
    });
  }

  get(e) {
    const x = e.slice(-2 , -1)
    this.router.navigate(['tabs/films/detailfilm' , x]);
  }

  getFilms(): Observable<any> {
    return this.http.get('https://swapi.co/api/films/')
  }

}
