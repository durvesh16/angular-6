import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail-list',
  templateUrl: './thumbnail-list.component.html'
  
})
export class ThumbnailListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mediaitem = [
 
    {
    
      moviename : "Stree",
      watchon : '25 - 11- 2018',
      category : 'Action',
      year : '2017'
      
    },

    {
    
      moviename : "Thor",
      watchon : '25 - 11- 2018',
      category : 'Action',
      year : '2017'
      
    },

    {
    
      moviename : "Avengers",
      watchon : '25 - 11- 2018',
      category : 'Action',
      year : '2017'
      
    },

    {
    
      moviename : "Abhadhun",
      watchon : '25 - 11- 2018',
      category : 'Action',
      year : '2017'
      
    }

];

}
