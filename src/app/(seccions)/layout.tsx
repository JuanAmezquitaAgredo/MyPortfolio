import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

interface Iprops{
    children: React.ReactNode,
}
export default function layout(props: Iprops){
    const { children } = props
  return (
    <div>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}
