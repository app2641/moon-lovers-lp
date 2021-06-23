import React from 'react';
import { Helmet} from 'react-helmet';

export default function Metada() {
  return (
    <Helmet>
      <title>Moon Lovers - 今夜の月齢</title>
      <meta charset="UTF-8" />
      <meta content="いまの月齢を確認できます。その上、毎夜10時に今夜の月齢も通知しましょう。" name="description" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Suranna&display=swap" rel="stylesheet" />
    </Helmet>
  );
}