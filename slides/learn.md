## reveal.jsで簡単スライド作成

---

* 導入目的

  <p class="fragment fade-up">MarkDown記法 + HTML + CSSの知見が広がる。</p>

  <p class="fragment fade-up">公開すればスマホでいつでも見れる。</p>
  
  <p class="fragment fade-up">ブラウザから操作が出来て<span class=" fragment color-pink-500">マジでイケてる。</span>
  </p>

---

### デフォルトの設定

---


次のページへ遷移

```
---

（Macユーザーはindex.htmlを修正する必要がある。)

```

---

### 下のスライドに移動


```
>>>

（Macユーザーはindex.htmlを修正する必要がある。)

```

---

### フラグメントその1

<p class="fragment grow">拡大</p>
<p class="fragment shrink">縮小</p>
<p class="fragment fade-out">フェードアウト</p>
<p class="fragment fade-up">フェードアップ</p>

```
<p class="fragment grow">拡大</p>
<p class="fragment shrink">縮小</p>
<p class="fragment fade-out">フェードアウト</p>
<p class="fragment fade-up">フェードアップ</p>
```

---

## フラグメントその2

<p class="fragment highlight-red">赤にハイライト</p>
<p class="fragment fragment color-pink-500">カスタムカラーにハイライト</p>

```
<p class="fragment highlight-red">赤にハイライト</p>
<p class="fragment fragment color-pink-500">カスタムカラーにハイライト</p>

```

---

## コードハイライト

```js
 const array = [{
   name: 'きなこちゃん',
   age: 4,
   job: 'おさらあらい'
 }, {
   name: 'なかつよ',
   age: 31,
   job: 'NEET',
 },{
   name: 'おちびちゃん',
   age: 6,
   job: 'しょうがくせい',
 }];
 
 const addIsWorked = (item) => {
 	item.isWorked = true;
  return item;
 }


 const results = array
  .filter(item => item.job !== 'NEET')
  .map(addIsWorked);
console.log(results);

```


---

かっこよくね？

  <p class="fragment fade-up">控えめにいって<span class=" fragment fade-up color-pink-500">かっこよくね？</span>

---

### おしまい

