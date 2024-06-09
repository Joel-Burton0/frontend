import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    // Add more team members as needed
    { name: 'Joel Burton', role: 'CFO', photo: '/assets/images/CEO.webp' },
    { name: 'Malvrick Brown', role: 'CTO', photo: '/assets/images/CFO.jpeg' },
    { name: 'Shannakaye Madison', role: 'CEO', photo: '/assets/images/CTO.webp' },
  ];
}
