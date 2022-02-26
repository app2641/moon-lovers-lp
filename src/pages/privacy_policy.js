import React from "react";
import Layout from '../components/layout';
import Metadata from '../components/privacy_policy/metadata';
import Text from '../components/privacy_policy/text';
import Hero from '../components/hero';
import Body from '../components/body';
import Footer from '../components/footer';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Metadata />
      <Hero />
      <Body>
        <Text />
      </Body>
      <Footer />
    </Layout>
  )
}
