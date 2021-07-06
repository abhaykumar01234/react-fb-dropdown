import settingsChild from './settings';
import helpChild from './help';

export default [
  {
    id: 1,
    text: 'Home',
    icon: 'fas fa-home'
  },
  {
    id: 2,
    text: 'Settings & privacy',
    icon: 'fas fa-cog',
    children: settingsChild
  },
  {
    id: 3,
    text: 'Help & support',
    icon: 'fas fa-question-circle',
    children: helpChild
  },
  {
    id: 4,
    text: 'About Us',
    icon: 'fas fa-user'
  },
  {
    id: 5,
    text: 'Feedback',
    icon: 'fas fa-comment-alt'
  }
];
