import React, { Component } from 'react';
import UserCard from './components/UserCard';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserCard />
      </div>
    )
  }
}



 /* 
      User Card
      step 1: Create component for my user card
      step 2: Create axios get request to retrieve data for user card
      step 3: Assign items from axios call to state
      step 4: render component to screen
       */

      /* 
      List of Followers
      step 1: Create component for follower user card
      step 2: Create axios get request to retrieve data for followers
      step 3: map over data
      step 4: Assign items from axios call to state
      step 5: render component to screen  */