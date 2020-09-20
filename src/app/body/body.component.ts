import { DataService } from './../data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  rocket: any = [];
  subscription: Subscription;
  constructor(private dataService: DataService) { 
  
  }

  ngOnInit(): void {
    this.dataService.getSpaceXData().subscribe((res: any) => {
      this.rocket = res;
    });

    this.subscription =   this.dataService.getData().subscribe((res: any) => {
      this.rocket = [];
      this.rocket = res;
    });
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

}
