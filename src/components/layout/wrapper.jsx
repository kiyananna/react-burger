import PropTypes from 'prop-types';

export const Wrapper = ({ children }) => {
  return <main className="constructor pl-5 pr-5 container">{children}</main>;
};

Wrapper.propTypes = {
  children: PropTypes.element,
};
