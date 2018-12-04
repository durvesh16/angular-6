import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  
})
export class ProductComponent implements OnInit {
  
  constructor() { }

  title = 'Product List';

  isdisabled = false;

  language = 'Angular';

  isdisabledangular = false;
  count = 0; 

  add () {
    this.count++;
    this.count == 6 ? this.isdisabledangular = true : this.isdisabledangular = false;

    
  }

  reset (){
    this.count = 0;
    this.isdisabledangular = false;
  }




  ngOnInit() {
  }

}
