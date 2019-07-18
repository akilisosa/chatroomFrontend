import { Component, OnInit } from '@angular/core';
 import { User } from 'src/app/models/User';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User = {
  id: 0,
  email: "",
  password: "",
  adminLvl: 1,
  status:1

  };
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
login() {
   console.log(this.user.email);
   console.log(this.user.password);

this.loginService.login(this.user.email, this.user.password).subscribe((res)=>{
console.log(res);
const LoggedInUser = JSON.stringify(res);
sessionStorage.setItem('LoggedInUser', LoggedInUser);


//LoggedInUser = JSON.parse(LoggedInUser);
if (LoggedInUser!='null') {
 console.log('hey you are finally logged in');
} else {
  console.log('no no no you are logged out');
}



});




}
}
