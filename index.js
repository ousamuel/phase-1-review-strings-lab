// Write your code in this file!
let currentUser = "sam";
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
// can also interpolate like 'Welcome to Flatbook, ${currentUser}!';
// must not use double quotes for interpolation
const excitedWelcomeMessage =
  'WELCOME TO FLATBOOK, ' + currentUser.toUpperCase() + '!';

const shortGreeting = 'Welcome, ' + currentUser[0] + '!';
