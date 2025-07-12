import React from 'react'
import Landing from './Landing'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="bg-info d-flex justify-content-around">
       <h1 className="btn btn-warning mt-2 rounded-2">Upload New Video <i class="fa-solid fa-plus bg-warning rounded-circle border border-2 border-white ms-2 cursor-pointer"></i></h1>
       <Link to={'/history'} className="text-decoration-none"><h1 className="btn btn-warning mt-2 p-1 rounded-2 d-flex justify-content-center align-items-center p-2 cursor-pointer">watch History</h1></Link>
    </div>
    <Footer/>
    </>
  )
}

export default Home
