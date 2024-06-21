import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private reservationService:ReservationService,private router:Router,
    private route: ActivatedRoute,private authService:AuthService){}
    users:any =[];
    id: number = 0;
 
  ngOnInit(): void {
    this. fetchUser()
 }


 fetchUser(){
  this.id = this.route.snapshot.params['id'];
  this.reservationService.viewRentalBooking(this.id).subscribe(res =>{
    if(res['status'] !== 'error'){
      this.users = res['data']['reservation'];
    }
  });
}


}

