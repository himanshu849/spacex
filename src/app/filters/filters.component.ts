import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  years: number [] =  [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  bool: string [] = ['true', 'false'];
  selctedYearIndex: number;
  selectedLaunchIndex: number;
  selectedLandingIndex: number;
  launch: any;
  year: any;
  landing: any;
  filterdData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onClickFilters(type: string, value: any, index: number): any {
    if (type === 'year') {
      this.selctedYearIndex = index;
      this.year = value;
    } else if (type === 'launch') {
      this.selectedLaunchIndex = index;
      this.launch = value;
    } else {
      this.selectedLandingIndex = index;
      this.landing = value;
    }

    this.dataService.setFilter(this.year, this.launch, this.landing).subscribe((res: any) => {
      this.filterdData = res;
      if (this.filterdData) {
        this.dataService.setData(this.filterdData);
      }
    });
  }

}
