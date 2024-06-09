import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FleetsearchService } from 'src/app/service/fleet.service'; 
import { ReservationService } from 'src/app/service/reservation.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  constructor (private reservationService: ReservationService, private fleetService: FleetsearchService, private router:Router){}
  
  rentals = [];
  makeRes = [];

  ngOnInit(): void {
    this.fetchRentals();
  }

  bookingRental(oForm: NgForm){
    this.reservationService.makeBooking(oForm.value).subscribe(res => {
      if(res['status']=='success'){
        Swal.fire({
          icon: 'success',
          title: 'REGISTRATION SUCCESSFUL',
        });
        this.router.navigateByUrl('/fleet');
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Failed to Register'
        })
      }
    })
  }
  
  fetchRentals(){
    this.fleetService.getfleet().subscribe(res => {
      if(res['status']== 'success'){
        this.rentals = res['data']['fleets'];
      }
    });
  }
}


