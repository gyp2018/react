import React from 'react';
var moment = require('moment');
var day = moment("1995-12-25");

function Hello({ name }) {
  return <h1>Hello, {name} {day} !!! </h1>;
}

export default Hello;
