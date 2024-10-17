import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='m-2 flex justify-between p-3 shadow-md'>
       
        <Image src={'/logo.svg'} width={230} height={230}/>
        <Button>Get Started</Button>
   
        
    </div>
  )
}


