import { UserButton } from '@clerk/nextjs'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-2 shadow-md'>
       <Link href={"/dashboard"}><Image src={'/onlylogo.svg'} width={220} height={220}/></Link>
       <UserButton />
    
    </div>
  )
}
