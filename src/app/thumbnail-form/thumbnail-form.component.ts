import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail-form',
  templateUrl: './thumbnail-form.component.html'
  
})
export class ThumbnailFormComponent implements OnInit {

  onSubmit(thumbnailItem){
    console.log(thumbnailItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
