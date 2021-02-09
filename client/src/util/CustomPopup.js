import React from 'react';
import { Popup } from 'semantic-ui-react';

const CustomPopup = ({ content, children, ...rest }) => {
  return (
    <Popup
      inverted
      size="mini"
      content={content}
      trigger={children}
      {...rest}
    />
  );
};

export default CustomPopup;
