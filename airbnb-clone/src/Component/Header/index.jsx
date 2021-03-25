import React from "react";
import './index.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = (props) => {
  return (
    <>
      <header className="airbnb__header">
          <img className ="airbnb__logo" src={process.env.PUBLIC_URL + "Image-assets/logo192.png"} />
        <div className="airbnb__search">
            <input type="text"/>
            <SearchIcon/>
        </div>
        <div className="airbnb__profile">
            <p>Become Host</p>
            <LanguageIcon/>
            <div className ="airbnb__profile--menu">
                <MenuIcon className ="color-grey"/>
                <AccountCircleIcon className ="color-grey"/>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
