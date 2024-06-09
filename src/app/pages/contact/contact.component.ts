import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit() {
    // Logic to handle form submission
    // e.g., send data to a backend server
    Swal.fire({
      title: "Message Sent",
      text: "Thank you contacting us!",
      icon: "success"
    });
  }
}
