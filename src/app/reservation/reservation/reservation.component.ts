import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/service/reservation.service';
import { FleetsearchService } from 'src/app/service/fleet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
 constructor(private reservationService:ReservationService,private fleetservice:FleetsearchService,
  private router:Router,private route: ActivatedRoute,private authservice:AuthService){}

 reserves: any = [];


 ngOnInit(): void {
     this.fetchallReservation();
 }

fetchallReservation(){
  this.reservationService.getallReservations().subscribe(res=>{
    if(res['status']=='success'){
      this.reserves = res['data']['reservations'];
    }
  });
}


}