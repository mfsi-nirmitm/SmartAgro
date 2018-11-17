import { Component, OnInit, EventEmitter, Output, ElementRef, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Observable } from '../../../../node_modules/rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, merge } from 'rxjs/operators';
import { Brand } from '../../model/brand.model';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  @Output()
  linkClicked: EventEmitter<any> = new EventEmitter();
  title: string;
  brands: any[]=[
    {id:1,name:'Pepsi'},
    {id:2,name:'Pepsi Co'},
    {id:3,name:'Pepsi'},
  ];
  selectedBrand:any;

  constructor(private _elementRef: ElementRef, private _userService: UserService
  ) { }

  ngOnInit() {

    this._userService.linkSelected.subscribe(
      (val) => {
        this.title = val;
      }
    )
  }

  onSelectedBrand(selectedBrand){
    console.log(selectedBrand);
    this.selectedBrand = null;
  }

  brandSearch = (text$: Observable<string>) =>
    text$.pipe(
        debounceTime(100),
        distinctUntilChanged(), map(x => x === '' ? this.brands
        : this.brands.filter(v => v.name.toLowerCase().indexOf(x.toLowerCase()) > -1))
    );

  formatter = (x: { name: string }) => x.name;

  clearBrand(){
      this.onSelectedBrand('') ;
  }
}
