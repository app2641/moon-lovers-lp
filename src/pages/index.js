import React from "react";
import Layout from '../components/layout';
import Metadata from '../components/home/metadata';
import Hero from '../components/hero';
import Body from '../components/body';
import GooglePlayBadge from '../components/home/google_play_badge';
import Description from '../components/home/description';
import Device from '../components/home/device';
import AppText from '../components/home/app_text';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Layout>
      <Metadata />
      <Hero />
      <Body>
        <GooglePlayBadge />
        <Description />
        <Device />
        <AppText />
      </Body>
      <Footer />
    </Layout>
  )
}
