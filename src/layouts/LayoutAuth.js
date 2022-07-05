import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../components/common/ErrorComponent';

const LayoutAuth = ({ children, heading = '' }) => {
  return (
    <div className="w-full min-h-screen bg-lite p-10 relative isolate dark:bg-darkbg">
      <img
        className="hidden lg:block pointer-events-none absolute bottom-0 left-0 right-0 z-[-1]"
        src="/ellipse.png"
        alt="background"
      />
      <Link className="inline-block mb-5 lg:mb-16" to={'/'}>
        <img srcSet="/logo.png 2x" alt="crow funding app" />
      </Link>

      <div className="mx-auto w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 dark:bg-darkSecondary">
        <h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 text-center dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuth.propTypes = {
  heading: propTypes.string,
  children: propTypes.node
};

export default withErrorBoundary(LayoutAuth, {
  FallbackComponent: ErrorComponent
});
