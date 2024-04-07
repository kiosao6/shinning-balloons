
'use client'

import { useState } from 'react'
import styles from "./MenuButton.module.css"
import { MobileMenu } from './MobileMenu'

export const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false)
  const onClick = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <>
      <button
        onClick={() => onClick()}
        className={`${styles.burger} relative w-8 h-8 flex items-center justify-center md:hidden z-30`}
      >
        <MenuIcon data-hide={showMenu} />
        <CrossIcon data-hide={!showMenu} />
      </button>
      {
        showMenu && <MobileMenu />
      }

    </>
  )
}



const MenuIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className='h-7 w-7 absolute text-base-heading'
      width='24'
      height='24'
      viewBox='0 0 20 20'
      fill='none'
      {...props}>
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const CrossIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className='h-7 w-7 absolute text-base-heading'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}>
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
}