import helpChild from './help';

export default [
  {
    id: 1,
    text: 'Personal Info',
    icon: 'fas fa-user'
  },
  {
    id: 2,
    text: 'Password',
    icon: 'fas fa-lock'
  },
  {
    id: 3,
    text: 'Activity Log',
    icon: 'fas fa-address-book',
    children: helpChild
  },
  {
    id: 4,
    text: 'Languages',
    icon: 'fas fa-globe-asia'
  },
  {
    id: 5,
    text: 'Log Out',
    icon: 'fas fa-sign-out-alt'
  }
];
