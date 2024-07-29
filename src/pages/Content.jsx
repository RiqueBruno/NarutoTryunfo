import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import Cards from './Cards'
import NtFound from './NtFound'

export default function Content() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/game' element={<Game/>}/>
        <Route exact path='/cards' element={<Cards/>}/>
        <Route exact path='*' element={<NtFound/>}/>
    </Routes>
  )
}
