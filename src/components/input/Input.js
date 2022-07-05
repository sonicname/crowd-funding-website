import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '../common';

const Input = ({
  control,
  name = '',
  type = '',
  placeholder = '',
  error = '',
  children,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: ''
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full py-4 px-6 border rounded-xl text-sm font-medium rounded-xl text-text1 placeholder:text-text4 ${
          error.length > 0 ? 'border-error' : 'border-strock'
        } ${children ? 'pr-16' : ''}`}
        placeholder={error.length > 0 ? '' : placeholder}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error absolute top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 select-none cursor-pointer">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent
});
