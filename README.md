chocoDamages
===

## Description  
チョコットランドの被ダメ計算したい

## Usage
demo に適当な値を入れれば使えます
## Demo
https://naoharu0730.github.io/chocoDamages/

## Note

- 属性倍率
  - 有利：2.0倍
  - 微有利：1.5倍
  - 通常：1.0倍
  - 微不利：0.9倍
  - 不利：0.8倍

- 被ダメージ計算式
  - 物理：(敵atk - キャラdef) * 1.5 * 属性倍率 * クリティカル発生1.75 - 耐性値
  - 魔法：(敵mat - キャラmdf) * 属性倍率 * クリティカル発生1.75 - 耐性値

## Author
[naoharu0730](https://github.com/naoharu0730)