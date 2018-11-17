import { Component, OnInit,OnDestroy, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Router } from "@angular/router";
import { Brand } from '../../model/brand.model';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.less']
})
export class BrandListComponent implements OnInit {
  brands: any[]=[
                  {id:1,name:'Pepsi'},
                  {id:2,name:'Pepsi Co'},
                  {id:3,name:'Pepsi'},
                ];
  @Output() brandChanged: EventEmitter<any> = new EventEmitter();
  constructor() {
  }
  
  ngOnInit() {
  
  }

  changed(brandId, navigateToEstimates: boolean = true) {
  }

}
