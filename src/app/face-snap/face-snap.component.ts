import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  creatDate!:Date;
  snaps!: number;
  imagUrl!:string;
  
  ngOnInit(){
    this.title ='Zaban';
    this.description ='fruit saisonier de de l afrique de louest ';
    this.creatDate= new Date() ;
    this.snaps = 6;
    this.imagUrl="https://www.webonary.org/dioula-bf/wp-content/blogs.dir/339/files/images/original/saba%20senegalensis.jpg"
  }
}
