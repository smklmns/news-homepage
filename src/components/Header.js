import React from 'react'
import logo from '../news-homepage-main/assets/images/logo.svg'
import iconMenu from '../news-homepage-main/assets/images/icon-menu.svg'
import iconMenuCross from '../news-homepage-main/assets/images/icon-menu-close.svg'


const Header = ({toggle, setToggle}) => {
  

  const toggleF = () => {
    console.log(toggle)
   return setToggle(!toggle)
  }
  return (
    <header>
      <div className={toggle ? "overlay" : "closedOverlay"}></div>
      <img src={logo} alt="logo" />
      <nav>
        <img className={toggle ? "closedMenuIcon" : "openMenuIcon"} onClick={toggleF} src={iconMenu} alt="icon menu" />
        
        <div className={toggle ? "openedMenuBox" : 'hiddenMenuBox'}>
          <img onClick={toggleF} className="iconMenuCross" src={iconMenuCross} alt="icon close menu" />
          <div className='linksBox'>
            <a>Home</a>
            <a>New</a>
            <a>Popular</a>
            <a>Trending</a>
            <a>Categories</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header