import React from 'react';
import { Helmet } from 'react-helmet';

export default function Metadata() {
  return (
    <Helmet>
      <title>Moon Lovers - プライバシーポリシー</title>
      <meta charset="UTF-8" />
      <meta content="Moon Loversのプライバシーポリシーです" name="description" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Suranna&display=swap" rel="stylesheet" />
    </Helmet>
  );
}