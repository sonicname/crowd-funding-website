import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils';

const Button = ({
  type = 'button',
  className = '',
  children,
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="mx-auto w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin" />
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={classNames(
        'p-4 text-base text-white font-semibold rounded-xl min-h-[56px] select-none hover:opacity-80 duration-300 active:scale-90',
        isLoading ? 'opacity-50 pointer-events-none' : '',
        className
      )}
      {...rest}>
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool
};

export default Button;
