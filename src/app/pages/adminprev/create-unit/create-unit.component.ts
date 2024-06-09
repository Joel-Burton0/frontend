import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {FleetsearchService} from 'src/app/service/fleet.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-unit',
  templateUrl: './create-unit.component.html',
  styleUrls: ['./create-unit.component.css']
})
export class CreateUnitComponent implements OnInit {
  constructor(private fleetService: FleetsearchService, private router:Router) {}
  ngOnInit(): void {}
 
  addNewRental(oForm: HTMLFormElement){
    const form = new FormData(oForm)
    const newcar = this.fleetService.addvehicle(form).subscribe((res) => {
      if(res['status']== 'success'){
        Swal.fire({
          icon: 'success',
          title: 'Added to Fleet Successfully'
        })
        this.router.navigateByUrl('/Admin')
      }else{
        Swal.fire({
          icon: 'error',
          title: 'REGISTRATION UNSUCCESSFUL'
        }); 
      }
    })
  }
}


