import React from 'react';
import PropTypes from "prop-types";

// type Props = {
//   name: number
// };

const Hello = ({name}) => {
  const greeting = 'hi hello';
  return (
    <div>
        <h1   className="dfdf">Hello, {name + greeting}!!!</h1>
      <p>hi</p>
    </div>
  );
};

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Hello;
