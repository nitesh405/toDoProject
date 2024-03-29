import { Component, OnInit } from '@angular/core';
import { AngularFireAuthService } from 'src/app/services/angular-fire-auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
user:any;
isAddFile:boolean=false;
isListFiles:boolean=false;
  constructor(private fireAuthService:AngularFireAuthService,private router:Router) { }

  logout(){
    this.fireAuthService.signOut().then(res=>{
      console.log('logged out',res)
      localStorage.clear();
      this.router.navigate(['/sign-In'])
    })
  }
  ngOnInit(): void {
   this.user=localStorage.getItem('email')
  }

  navigate(val: any){
    this.router.navigate([`/dashboard/${val}`])
  }

}
