import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: any;

  sub = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private locaion: Location) {

  }

  getSpaceXData(): Observable<any> {
    const url = `https://api.spaceXdata.com/v3/launches?limit=100`;
    return this.http.get(url);
  }

  setFilter(year: number, launch: boolean, landing: boolean): Observable<any> {

    if (year && launch && landing) {
      const urls = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}&launch_success=${launch}&land_success=${landing}`;
      return this.http.get(urls);
    }

    if (year && launch) {
      const urls = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}&launch_success=${launch}`;
      return this.http.get(urls);
    }

    if (year && landing) {
      const urls = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}&land_success=${landing}`;
      return this.http.get(urls);
    }

    if (launch && landing) {
      const urls = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${landing}`;
      return this.http.get(urls);
    }

    if (launch) {
      const urls = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}`;
      return this.http.get(urls);
    }

    if (landing) {
      const urls = `https://api.spaceXdata.com/v3/launches?limit=100&land_success=${landing}`;
      return this.http.get(urls);
    }

    if (year) {
      const urls = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`;
      return this.http.get(urls);
    }

  }

  setData(data: any): any {
    console.log('data..', data);
    this.sub.next(data);
  }

  getData(): Observable<any> {
    return this.sub;
  }

}
