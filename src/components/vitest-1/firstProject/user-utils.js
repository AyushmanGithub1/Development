// user-utils.js

export function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }
  
  export function isAdult(age) {
    return age >= 18;
  }
  
  export function getFriendsCount(friendsArray) {
    return friendsArray.length;
  }
  
  export async function fetchUser() {
    // Imagine this does a real API call
    return { name: 'Real User' };
  }