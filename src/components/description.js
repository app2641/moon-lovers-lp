import React from 'react';
import * as style from './style/description.module.css';

export default function Description() {
  return (
    <div className={style.description}>
      <p>いまの月齢を確認できます。</p>
      <p className="mt-1">その上、毎夜10時に今夜の月齢も通知しましょう。</p>
    </div>
  );
}