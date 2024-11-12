import React from 'react';
import '../css/titlepageheader.css';

const Header = (props) => {
  const { title } = props;

  return (
    <header className="titlePageHeader">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
