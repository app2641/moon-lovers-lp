import React from 'react';
import * as style from '../style/privacy_policy_text.module.css';

export default function Text() {
  return (
    <div className={style.privacy_policy_text}>
      <h2>プライバシーポリシー</h2>
      <p>
        Moon Lovers は無料アプリとして <a href="https://twitter.com/app2641" target="_blank">app2641</a> が作成しました。本アプリは app2641 によって無料で提供するものであり、そのまま使用することを目的としています。
        <br />
        本ページは、本アプリをご利用いただくにあたり、個人情報の収集、利用、開示に関する方針をお知らせするためのものです。
        <br />
        本アプリを利用する場合、本ページに記載されるポリシーに関連する情報の収集と使用に同意するものとします。
        収集する個人情報は、サービスを提供し、改善するために使用されます。
        本プライバシーポリシーに記載されている場合を除き、いかなる方法でも情報を使用または共有をすることはありません。
      </p>

      <h2>情報の取得・収集</h2>
      <p>
        より良いサービスを提供するために、個人を特定できる情報を提供していただく可能性があります。要求する情報はデバイス内で保持され、app2641 が取得することはありません。
        <br />
        本アプリは、個人を特定するために使用される情報を収集する可能性のあるサードパーティ製のサービスを利用しています。
        <br />
        本アプリが使用するサードパーティ製サービスのプライバシーポリシーは以下のリンクを参照してください。
        <ul>
          <li>
          <a
            href="https://www.google.com/policies/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Google Play Services
          </a>
          </li>
        </ul>

        <h2>ログデータ</h2>
        <p>
          本アプリにエラーが発生した場合に、使用デバイスにログデータと呼ばれるデータと状況をサードパーティ製サービスを通じて収集することがあります。
          <br />
          このログデータには、デバイスの IP アドレス、デバイス名、オペレーションシステムのバージョン、本アプリの設定、本アプリを使用した日時、その他の統計情報などが含まれることがあります。
        </p>

        <h2>クッキー（Cookies）</h2>
        <p>
          クッキーは、一般的に匿名の一意の識別子として使用される少量のデータファイルです。訪問したウェブサイトからブラウザに送信され、デバイスの内部メモリに保存されます。
          <br />
          本アプリでは、クッキーを明示的に使用することはありません。ただし、本アプリでは、情報収集やサービス向上のためにクッキーを使用するサードパーティ製のコードやライブラリを使用する場合があります。
          <br />
          これらのクッキーを受け入れるか拒否するか、及びデバイスにクッキーが送信されたときに知ることのできるオプションがあります。クッキーの使用を拒否した場合、本アプリの一部をご利用いただけない可能性があります。
        </p>

        <h2>サービスプロバイダー</h2>
        <p>
          以下の理由により、第三者の企業や個人を採用することがあります。
          <ul>
            <li>サービスを円滑に運営するため</li>
            <li>本アプリに関連するサービスを提供するため</li>
            <li>本アプリの利用状況の分析に協力するため</li>
          </ul>
          これらの第三者がユーザーの個人情報にアクセスする可能性があります。他の目的のために情報を開示または使用することはありません。
        </p>

        <h2>他サイトへのリンク</h2>
        <p>
          本アプリには他のサイトへのリンクが含まれている場合があります。利用ユーザーがリンクをクリックすることで他のサイトへと移動します。
          <br />
          なお、これらの外部サイトは app2641 が運営するものではありません。
          <br />
          これらの外部サイトのサービスやコンテンツ、プライバシーポリシーについて、いかなる管理も行わず、いかなる責任も負わないものとします。
        </p>

        <h2>プライバシーポリシーの変更</h2>
        <p>
          app2641 は本アプリのプライバシーポリシーを更新することがあります。
          <br />
          このページに新しいプライバシーポリシーを掲載することにより、変更を通知します。
          <br />
          このポリシーは2022年2月28日より有効となります。
        </p>

        <h2>お問い合わせ</h2>
        <p>
          本アプリのプライバシーポリシーについてご質問やご提案がありましたら DM でご連絡ください。
          <br />
          本プライバシーポリシーは <a href="https://privacypolicytemplate.net" target="_blank">privacypolicytemplate.net</a> で作成され、 <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank">App Privacy Policy Generator</a> で修正・加筆されたものです。
        </p>
      </p>
    </div>
  )
}