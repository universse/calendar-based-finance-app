import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {transactionClear, startLogout} from 'actions'
import {backgroundColor} from 'variables'

const Nav = styled.nav`
  background-color: #fafafa;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, .16), 0px 1px 4px rgba(0, 0, 0, .23);
  display: flex;
  height: 56px;
  justify-content: center;
  margin: 0 auto;
  max-width: 26rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: none;
  }
`

const NavLink = styled(Link)`
  align-items: center;
  color: rgba(0, 0, 0, .6);
  display: inline-flex;
  font-size: 12px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  width: 25%;
  max-width: 168px;

  &.active {
    color: ${backgroundColor};
  }

  &:focus {
    outline: none;
  }
`

let AppNav = ({loggedIn, dispatch}) => {
  let _clear = () => dispatch(transactionClear())
  let _logOut = () => dispatch(startLogout())

  return (
    <Nav>
      <NavLink to='/app' activeClassName='active' onClick={_clear}>Calendar</NavLink>
      <NavLink to='/dashboard' activeClassName='active' onClick={_clear}>Reports</NavLink>
      <NavLink to='/add' activeClassName='active'>Add</NavLink>
      <NavLink to='/' onClick={_logOut}>Sign Out</NavLink>
    </Nav>
  )
}

export default connect(
  state => ({
    loggedIn: state.user
  })
)(AppNav)
