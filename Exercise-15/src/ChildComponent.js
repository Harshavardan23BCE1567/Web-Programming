import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({ message }) => {
  return <p>{message}</p>;
};

ChildComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default ChildComponent;