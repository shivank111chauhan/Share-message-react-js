import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationButton = ({ label, to }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };

  return (
    <button onClick={handleClick}>{label}</button>
  );
};

export default NavigationButton;
