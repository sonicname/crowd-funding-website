import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, htmlFor = '', className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-text2 cursor-pointer inline-block select-none ${className} dark:text-text3`}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string
};

export default Label;
