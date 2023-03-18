import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnape! : FaceSnap;

  ngOnInit(){
    this.mySnape = new FaceSnap(
      'Zaban',
      'fruit saisonier de de l afrique de louest ',
       new Date(),
       0,
      'https://www.webonary.org/dioula-bf/wp-content/blogs.dir/339/files/images/original/saba%20senegalensis.jpg'
    );
  }
}
