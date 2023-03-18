import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  textLike!:string;
  
  ngOnInit(){
      this.textLike="j'ai aimé";
  }

  onSnaps() {
    if(this.textLike === "j'ai aimé"){
      this.faceSnap.snaps++;
      this.textLike="je ne l'aime plus"

    }
    else{
      this.faceSnap.snaps--;
      this.textLike="j'ai aimé"
    }
  }
}
