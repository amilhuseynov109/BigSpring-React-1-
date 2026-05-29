import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../layout/Layout'
import Index from '../pages/index'
import Blog from '../pages/Blog'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'


function Router() {
  return (
      <>
      
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<Index />} />
                  <Route path='/Blog' element={<Blog />} />
                  <Route path='/Pricing' element={<Pricing />} />
                  <Route path='/Contact' element={<Contact />} />
                  <Route path='/FAQ' element={<FAQ />} />
                  

              </Route>
          </Routes>
      </>
  )
}

export default Router