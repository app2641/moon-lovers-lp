import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as style from './style/hero.module.css';

export default function Hero() {
  return (
    <div>
      <StaticImage
        src="../../static/images/logo.svg"
        alt="Moon Lovers logo"
        layout="constrained"
        width={94.5}
        height={81.5}
        className="object-contain" />
      <h1 className={style.title}>Moon Lovers</h1>
    </div>
  )
}