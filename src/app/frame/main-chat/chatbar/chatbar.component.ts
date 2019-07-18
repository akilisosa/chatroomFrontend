import { Component, OnInit } from '@angular/core';
import { Comments } from '../../'

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {
  comment: Comment = {
    id: 0,
    email: "",
    password: "",
    adminLvl: 1,
    status:1
  
    };
  constructor() { }

  ngOnInit() {
  }

}
