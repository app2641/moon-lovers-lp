import React from 'react';
import * as style from './style/app_text.module.css';

export default function AppText() {
  return (
    <div className={style.app_text}>
      <p>
        ふと窓辺から夜の空を見て、<br />
        月がのぞき穴のように見えたら満月かな？と思いますね。
      </p>
      <p>雲ひとつなくしんと押し黙った夜空だったら新月なのかもしれません。</p>
      <p>星のあいだを滑る船のような三日月の夜もあります。</p>
      <p>そうすると、<br />天気が悪い日にどんな満ち欠けが起きているのか気になって想い馳せてしまう。</p>
      <p className={style.catchcopy}>いつでも、月を生活のそばに。</p>
    </div>
  )
}