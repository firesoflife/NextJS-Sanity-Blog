import React from 'react';
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle = ({ onChange }) => {
  return (
    <label>
      <Toggle
        className='day-night-toggle'
        icons={{
          checked: <FontAwesomeIcon inverse icon='sun' />,
          unchecked: <FontAwesomeIcon inverse icon='moon' color='yellow' />,
        }}
        onChange={onChange}
      />
    </label>
  );
};

export default ThemeToggle;
