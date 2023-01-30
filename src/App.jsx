import './App.css'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from './pages'

import homeImage from './assets/OpenAI.svg';

export default function App() {
  return (
    <>

      <BrowserRouter>
        <header className='header'>
          <Link to="/">
            <img className='home-image' src={homeImage} alt='Home' />
          </Link>
          <Link to='/create-post' className='link-create'> Create</Link>
        </header>
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}
