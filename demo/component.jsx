import React, { PropTypes } from 'react';

const StatelessComponent = ({name}) => (
  <div>
    <p className="template-string">{`Hi ${name}`}</p>
    <p className="mustache">Hello {name}.</p>
  </div>
);

StatelessComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StatelessComponent;
