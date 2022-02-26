import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as style from '../style/device.module.css';

export default function Device() {
  return (
    <div className={style.device}>
      <StaticImage
        src="../../static/images/device.png"
        alt="MoonLoversのスクリーン画像"
        width={320}
      />
    </div>
  )
}