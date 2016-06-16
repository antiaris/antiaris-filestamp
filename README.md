# antiaris-filestamp

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

文件时间戳

```js
import {filestamp, contentstamp} from 'antiaris-filestamp';

filestamp('./img/logo.png', (err, result) => {
    result//{filename: logo_e65c0a.png}
});

filestamp.sync('./img/logo.png');

contentstamp('var a=1;', 'log0.png', (err, result) => {
    result//{filename: logo_e65c0a.png}
});

contentstamp.sync('var a=1;', 'log0.png');

```

[npm-url]: https://npmjs.org/package/antiaris-filestamp
[downloads-image]: http://img.shields.io/npm/dm/antiaris-filestamp.svg
[npm-image]: http://img.shields.io/npm/v/antiaris-filestamp.svg
[travis-url]: https://travis-ci.org/antiaris/antiaris-filestamp
[travis-image]: http://img.shields.io/travis/antiaris/antiaris-filestamp.svg
[david-dm-url]:https://david-dm.org/antiaris/antiaris-filestamp
[david-dm-image]:https://david-dm.org/antiaris/antiaris-filestamp.svg
[david-dm-dev-url]:https://david-dm.org/antiaris/antiaris-filestamp#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/antiaris/antiaris-filestamp/dev-status.svg
