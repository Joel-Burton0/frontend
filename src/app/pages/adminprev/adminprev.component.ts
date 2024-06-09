import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FleetsearchService } from 'src/app/service/fleet.service';


@Component({
  selector: 'app-adminprev',
  templateUrl: './adminprev.component.html',
  styleUrls: ['./adminprev.component.css']
})
export class AdminprevComponent implements OnInit{

  constructor(private fleetService: FleetsearchService, private http: HttpClient){}
  rentals: any = [];
  
  ngOnInit(): void {
    this.fetchRentals();
  }

  fetchRentals(){
    this.fleetService.getfleet().subscribe(res => {
      if(res['status']== 'success'){
        this.rentals = res['data']['fleets'];
        console.log(this.rentals)
      }
    });
  }
}
