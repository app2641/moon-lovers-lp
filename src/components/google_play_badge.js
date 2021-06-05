import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function GooglePlayBadge() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.app2641.moonlovers"
      target="_blank"
      rel="noreferrer"
    >
      <StaticImage
        src="../../static/images/google-play-badge.png"
        alt="google play badge"
        layout="constrained"
        width={230}
      />
    </a>
  )
}