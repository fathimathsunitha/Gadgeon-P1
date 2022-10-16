import { myservice } from './../service/info_service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  Title="gadgeon"
  // btn(){
  //   alert("hello"+this.Title)
  // }
  onbtnclick()
  {
    const service =new myservice;
    service.onclickbt(this.Title);
  }

}
