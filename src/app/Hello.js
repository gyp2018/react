import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
  <div>
    <h1>Hello, {name}!!!</h1>
    <p>hi</p>
  </div>
);

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
