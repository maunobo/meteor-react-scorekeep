// This is the js file of the client

import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from './../imports/api/players';
import App from './../imports/ui/App';

// console.log('Players List', Players.find().fetch());

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {
      sort: {
        score: -1,
        name: 1
      }
    }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = 'Score Keep';
  
    ReactDOM.render(
      <App title={title} players={positionedPlayers}/>,
      document.getElementById('app')
    );
  });
});