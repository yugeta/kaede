Kaede
===
```
Create : 2025-06-14
Author : Yugeta.Koji
```

# Summary
- ホームページに雪を降らせたり、イチョウやカエデの葉っぱを降らせたりするためのライブラリ


# Howto
1. HTML内に以下を設置
-  id="kaede"
-  内部に降らせるimageタグを設置
- #kaedeタグには、hidden属性を設置（読み込み完了まで非表示にするため）
```
<div id="kaede" hidden="hidden" data-count="10" data-size="30" data-move="300" data-time="3000" data-delay="3000" data-rotate="90" data-offset="0.5">
  <img src="sample.png" />
</div>
```

2. src/main.jsを読み込み（ページ内どこでも設置可）

3. 各種パラメータを#kaedeタグのdata属性値で登録。
- data-count="10"   : 画面内の表示個数
- data-size="30"    : 画像表示の基本サイズ（乱数変動有り）
- data-move="300"   : 落下の移動距離（乱数変動有り）
- data-time="3000"  : 落下継続時間（乱数変動有り）
- data-delay="3000" : 表示開始遅延時間（乱数変動有り）
- data-rotate="90"  : 落下時の回転角度（乱数変動有り）
- data-offset="0.5" : 表示サイズの増減率（乱数変動有り）

# demo
> https://yugeta.github.io/kaede/demo/
