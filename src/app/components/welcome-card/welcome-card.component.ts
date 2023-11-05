import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css'],
})
export class WelcomeCardComponent {
  welcome = [
    {
      title: 'Hire Talent',
      description: 'Hire from the pool of talents from all over the world.',
      buttonText: 'Browse Talent',
      backgroundColor: 'rgba(175, 169, 235, 0.8)',
    },
    {
      title: 'Refer and Earn',
      description:
        'Earn discounts on your next hire by referring to your fellows.',
      buttonText: 'Earn Today',
      backgroundColor: 'rgba(175, 235, 169, 0.8)',
    },
    {
      title: "Join Employer's Club",
      description:
        'Get more benefits by joining a vibrant community of employers.',
      buttonText: 'Join Club',
      backgroundColor: 'rgba(235, 235, 169, 0.8)',
    },
  ];
}
