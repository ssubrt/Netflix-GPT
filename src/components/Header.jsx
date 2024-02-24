import React from 'react'
import { LOGO } from '../utils/constants';

const Header = () => {
  return (
    <div className='absolute  z-10 px-8 py-2 bg-gradient-to-b from-black'>
      <img className='w-44 '
      src={LOGO}
      alt='Try Again'
      />
    </div>
  )
}

export default Header;