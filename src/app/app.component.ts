import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '6';

 count = 0;

 add() {
   this.count++;
 }

 firstmediaitem = {
 
  moviename : 'Thor',
  watchon : '25 - 11- 2018',
  category : 'Action',
  year : '2017'
  
 }

}
