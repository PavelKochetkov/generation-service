import React from 'react';
import '../css/TitlePageHeader.css';

const Header = (props) => {
  const { title } = props;

  return (
    <div className="titlePageHeader">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
