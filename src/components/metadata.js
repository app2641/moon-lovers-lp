import React from 'react';
import { Helmet} from 'react-helmet';

export default function Metada() {
  return (
    <Helmet>
      <title>Moon Lovers - 今夜の月齢</title>
      <meta content="いまの月齢を確認できます。その上、毎夜10時に今夜の月齢も通知しましょう。" name="description" />
    </Helmet>
  );
}