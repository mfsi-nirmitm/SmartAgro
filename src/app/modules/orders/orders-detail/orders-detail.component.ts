import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { GridComponent } from '../../../shared/grid/grid.component';
import { SpinnyService } from '../../../shared/spinny/spinny.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.less']
})
export class OrdersDetailsComponent implements OnInit {
  filteredSpecialProjects:any[]=[];
  filteredSpecialProjectsLength:number=0;
  @ViewChild(GridComponent) gridComponent: GridComponent;
  public columns = [];

  constructor(private _spinnyService: SpinnyService, private _toastr: ToastrService) { }

  ngOnInit() {
    this.initializeColumns();
    this.initializeDataForGrid();
  }

  initializeColumns() {
    this.columns = [
      {
        type: 'text', id: 'brands', value: 'Brand', searchable: true, headerStyle: { 'width': '30px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'project', value: 'Project #', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'part', value: 'Part #', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'task', value: 'Tasks', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'jobStatus', value: 'Job Status', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'labelItem', value: 'Label Item', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'packagingItem', value: 'Packaging Item', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'shipperItem', value: 'Shipper Item', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'fitForUser', value: 'Fit For User', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
      {
        type: 'text', id: 'reasonNotFitForUser', value: 'Reason Not Fit For User', searchable: true, headerStyle: { 'width': '80px' },
        filter: {
          type: 'text',
          // items: this.itemList
        }
      },
    ];
  }
  initializeDataForGrid() {
    
  }


  ngOnDestroy(): void {
  }

}