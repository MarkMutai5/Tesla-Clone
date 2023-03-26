import AppLayout from '@/components/layout'
import Navbar from '@/components/layout/Navbar'
import Products from '@/components/products'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Products />
    </div>
  )
}

// LandingPage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default LandingPage