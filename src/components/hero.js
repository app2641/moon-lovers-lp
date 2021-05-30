import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as style from './style/hero.module.css';

export default function Hero() {
  return (
    <div>
      <StaticImage
        src="../../static/images/logo.png"
        alt="Moon Lovers logo"
        layout="constrained"
        width={189}
        height={163} />
      <h1 className={style.title}>Moon Lovers</h1>
    </div>
  )
}