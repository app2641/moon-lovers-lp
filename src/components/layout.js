import React from 'react';
import * as style from './style/layout.module.css';

export default function Layout({ children}) {
  return (
    <div className={style.background}>
      {children}
    </div>
  )
}