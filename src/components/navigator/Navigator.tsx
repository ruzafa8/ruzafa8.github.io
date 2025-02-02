import React from "react"
import styled from "styled-components"

const NavDiv = styled.nav`
  background-color: #333;
  position: sticky;
  top: 50px;
  color: #fff;
  border-radius: 1em;

  #nav-item-list {
    flex-grow: 1;
  }

  ul {
    li {
      padding: 1rem;
      a {
        color: #fff;
        &:hover {
          color: #aaa;
        }
      }
    }
  }
`

export interface NavItem {
  name: string
  link: string
}

export interface SocialItem {
  img: string
  link: string
}

export interface INavigator {
  navItems: Array<NavItem>
  socialItems: Array<SocialItem>
}


const Navigator = ({ navItems, socialItems }: INavigator): JSX.Element => {
  return <NavDiv className='d-flex mx-5 my-4 py-3 px-5'>
    <div className='d-flex flex-column justify-content-center'>
      <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        width={100} alt='logo' />
    </div>
    <ul id="nav-item-list" className='nav justify-content-center'>
      {navItems.map((item, index) => (
        <li key={index} className='nav-item'>
          <a className="nav-link" href={item.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
    <ul className='nav justify-content-center'>
      {
        socialItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <img src={item.img}
                alt='social' width={25} />
            </a>
          </li>
        ))
      }
    </ul>
  </NavDiv>
}

export default Navigator