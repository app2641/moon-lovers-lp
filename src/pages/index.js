import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero';
import Body from '../components/body';
import GooglePlayBadge from '../components/google_play_badge';
import Description from '../components/description';
import Device from '../components/device';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Body>
        <GooglePlayBadge />
        <Description />
        <Device />
      </Body>
      <Footer />
    </Layout>
  )
}
