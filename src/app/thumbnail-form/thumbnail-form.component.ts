import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-thumbnail-form',
  templateUrl: './thumbnail-form.component.html'
  
})
export class ThumbnailFormComponent implements OnInit {

 

 
  constructor() { }
  form;
  ngOnInit() {
    this.form = new FormGroup({
     
      medium: new FormControl(""),
      name: new FormControl(""),
      category: new FormControl(""),
      year: new FormControl("")

    });
   
  }

  onSubmit(thumbnailItem){
    console.log(thumbnailItem);
  }


}
