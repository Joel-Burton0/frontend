import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Eco-Friendly Cars',
      description: 'Rent the latest hybrid and electric vehicles to reduce your carbon footprint without compromising on performance.',
      icon: '/assets/images/eco-friendly.png'
    },
    {
      title: 'Flexible Rentals',
      description: 'Choose from hourly, daily, weekly, or monthly rental options to suit your needs. We provide maximum flexibility for all our customers.',
      icon: '/assets/images/goodprice.jpg'
    },
    {
      title: '24/7 Roadside Assistance',
      description: 'Our 24/7 roadside assistance ensures you are never left stranded. We are here to help you anytime, anywhere.',
      icon: '/assets/images/support_call.jpg'
    },
    {
      title: 'Premium Car Collection',
      description: 'Drive the car of your dreams with our premium collection of luxury vehicles. We offer top brands and models to choose from.',
      icon: '/assets/images/premium.avif'
    },
    {
      title: 'Contactless Rentals',
      description: 'Experience seamless and safe rentals with our contactless rental process. Book online, pick up, and drop off without any hassle.',
      icon: '/assets/images/wireless_con.png'
    },
    {
      title: 'Corporate Rentals',
      description: 'Special packages and deals for corporate clients. Enhance your business travel with our reliable and stylish fleet.',
      icon: '/assets/images/logo.png'
    }

  ];
}
