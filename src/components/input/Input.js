import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '../common';
import { classNames } from '../../utils';

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
        className={classNames(
          'w-full py-4 px-6 border rounded-xl text-sm font-medium rounded-xl placeholder:text-text4 dark:bg-transparent dark:placeholder:text-text2 dark:text-white',
          error.length > 0
            ? 'border-error text-error'
            : 'border-strock text-text1 dark:border-darkStroke',
          children ? 'pr-16' : ''
        )}
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
