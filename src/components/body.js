import React from 'react';
import * as style from './style/body.module.css';

export default function Body({ children }) {
  return (
    <div className={style.body}>
      {children}
    </div>
  )
}