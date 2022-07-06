import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '../common';

const ButtonGoogle = ({ text = 'Sign up with google', onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center py-3 gap-x-3 w-full border border-strock rounded-xl text-text2 text-base font-semibold mb-4 dark:text-white dark:border-darkStroke"
      onClick={onClick}>
      <img srcSet="/google.png 2x" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent
});
