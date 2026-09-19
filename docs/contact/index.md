---
sidebar: false
---
# お問い合わせ

<div class="contact-intro">
  <p>お問い合わせはこちらからどうぞ！ 2営業日以内にご連絡いたします。</p>
  <p>LINEでもメッセージのやり取り可能です。 お気軽にご連絡ください。</p>
  <a class="line-btn" href="http://nav.cx/4chnsB5"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" border="0"></a>
</div>

<form class="form" name="contact" method="POST" action="/contact/success" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <div class="form-item">
    <p class="form-item-label">
      <span class="form-item-label-required">必須</span>お名前
    </p>
    <input type="text" class="form-item-input" name="name" placeholder="例：山田　太郎" required />
  </div>
  <div class="form-item">
    <p class="form-item-label">
      <span class="form-item-label-required">必須</span>メールアドレス
    </p>
    <input type="email" class="form-item-input" name="email" placeholder="例：×××@×××.com" required />
  </div>
  <div class="form-item">
    <p class="form-item-label">
      <span class="form-item-label-unrequired">任意</span>電話番号
    </p>
      <input type="tel" class="form-item-input" name="tel" placeholder="例：09012345678" />
  </div>
  <!-- <div class="form-item">
      <p class="form-item-label istop">
        <span class="form-item-label-required">必須</span>お問い合わせ項目
      </p>
      <div class="form-item-flex">
        <div class="form-item-choice">
          <input type="radio" name="category" value="プログラミング教室" required />プログラミング教室
        </div>
        <div class="form-item-choice">
          <input type="radio" name="category" value="女性限定ICTサポート" />女性限定ICTサポート
        </div>
        <div class="form-item-choice">
          <input type="radio" name="category" value="その他" />その他
        </div>
    </div>
  </div> -->
  <div class="form-item">
    <p class="form-item-label istop">
      <span class="form-item-label-required">必須</span>お問い合わせ内容
    </p>
    <textarea class="form-item-textarea" name="message" cols="40" rows="10" required></textarea>
  </div>
  <div class="form-item">
    <p class="form-item-label istop">
      <span class="form-item-label-required">必須</span>プライバシーポリシーの同意
    </p>
    <div class="form-item-flex">
      <p class="form-item-comment">
        お問い合わせの際は、当教室「プライバシーポリシー」をご確認の上、「同意する」にチェックを入れて、送信ボタンをクリックしてください。<br>
        <a href="/about/#プライバシーポリシー" target="_blank">「プライバシーポリシー」はこちら</a>
      </p>
      <div class="form-item-choice">
        <input type="checkbox" name="accept" value="同意する" required />同意する
      </div>
    </div>
  </div>
  <div>
    <p >※今一度メールアドレスや電話番号のご確認をお願いいたします。</p>
    <div data-netlify-recaptcha="true"></div>
    <button type="submit"  class="form-btn">送信する</button>
  </div>
</form>
