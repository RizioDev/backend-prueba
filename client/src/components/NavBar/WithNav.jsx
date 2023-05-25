import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

const WithNav = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default WithNav