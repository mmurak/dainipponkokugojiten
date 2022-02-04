# dainipponkokugojiten
大日本國語辭典（1941年発行の修訂版）のオフライン検索アプリ

パソコン上で大日本國語辭典（1941年発行の修訂版）の検索を行うプログラムです。すべてのリソースをローカルPC上に配置するため、ネットワーク接続が要らず、高速検索が可能になっています。

# 注意点

* すべてのリソースをローカルPC上に配置するため1.4ギガバイト近くのストレージ容量が必要となります。
* また、インストール時には国立国会図書館デジタルコレクションよりダウンロードした1.3ギガバイトのPDFファイルを元に、全ページ分を画像ファイルとして展開するため（これで高速検索が可能になる）、一時的に3ギガバイト近くのストレージ容量が必要になります。

# 用意しておくもの

* 3ギガバイト程度の空き領域があるコンピューター
* 国立国会図書館デジタルコレクションで公開されている大日本國語辭典（1941年版）5巻分のPDFファイル（詳細は後述）
* Python（Python3）の処理系（インストール用のスクリプトをPythonで記述しているため。なお、macOSには既にPythonがインストールされています）
* このリポジトリーで公開している圧縮ファイル
* ブラウザー（ブラウザー上で検索を行うため。なお、動作確認はmacOS上のChrome/Firefox/Safari/Operaで行っています。）

# インストール方法

1. [このリポジトリーで公開している圧縮ファイル](https://github.com/mmurak/dainipponkokugojiten/archive/refs/heads/main.zip)をダウンロードし、適当なディレクトリーに展開します。
2. 国立国会図書館デジタルコレクションで公開されている大日本國語辭典5巻分のPDFファイルをダウンロードし、1で展開したディレクトリー（installer.pyがあるディレクトリー）内に格納します。
    1. 以下のURLにアクセスし、オレンジ色のプリンターアイコンの2つ右にあるダウンロードアイコン![スクリーンショット 2022-01-23 10 48 10](https://user-images.githubusercontent.com/7446897/152612356-a3b2933c-bbc4-468c-9f96-161016b1a861.png)
を押します（処理に時間がかかるため、サーバーの空いている時間帯に、気長に、1ファイルずつダウンロードしてください）。
        * 大日本國語辭典第1巻 <https://dl.ndl.go.jp/info:ndljp/pid/1870620>
        * 大日本國語辭典第2巻 <https://dl.ndl.go.jp/info:ndljp/pid/1870644>
        * 大日本國語辭典第3巻 <https://dl.ndl.go.jp/info:ndljp/pid/1870670>
        * 大日本國語辭典第4巻 <https://dl.ndl.go.jp/info:ndljp/pid/1870700>
        * 大日本國語辭典第5巻 <https://dl.ndl.go.jp/info:ndljp/pid/1870727>

3. ターミナル（Windowsだとコマンドプロンプト）を立ち上げ、installer.pyのあるディレクトリまで移動し、「python installer.py」と入力、エンターキーを押します。
（macOSには python の旧バージョンと新バージョンの双方が搭載されているため、入力するコマンドは「python3 installer.py」となります。）
インストール中は第1〜5巻の処理毎に、各巻の識別名称を入力するよう求めてきますが、最終的にインストーラー側で合本化し、不要になるので適当な文字（１，２，３，４，５など）を入力してください。
4. エディターからconfig.js コマンドを開き、先ほど入力した適当な文字が書き込まれている行を削除してください（合本化すれば不要になるため）。　以下のコードにしておけば動作します。
```
let configInfo = [
    ["修訂大日本國語辭典", "dainipponkokugo"],
];
```

# 使い方

* ブラウザーからインストールファイル内のindex.htmlをオープンします。
* 検索語をひらがな、または全角カタカナで入力し、Enterキーを押すと検索語のあるページが表示されます・
なお、検索に先立って自動的に濁点、半濁点が除去され、撥音と拗音は大きい文字に変換されます。このため、「かぜ」と入力すると、「かぜ」のページではなく、その前の「かせ」のページが開く点にご注意ください（これは仕様です）。
* 表示されたページをマウスでクリックすると、その周辺が拡大表示されます（もう1度クリックすると拡大表示がキャンセルされます）。
* escキーを押すと検索語の入力欄がクリアされ、次の入力が可能になります。
* 「前ページ」ボタンをクリックするか、矢印（↑）キーを押すと前ページが表示されます。
* 「次ページ」ボタンをクリックするか、矢印（↓）キーを押すと次ページが表示されます。
* 検索語入力欄の左横にあるドロップダウンボックスを選択すると、序文や凡例等のページを表示できます。

