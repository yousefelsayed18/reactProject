import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Location from '../Location/Location'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
<>
<Navbar/>

<Outlet/>
<Location/>
<Footer/>
</>


)
}
