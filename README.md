fis-preprocessor-autoprefixer
=======================

a autoprefixer plugin build for fis
#fis-preporcessor-autoprefixer
基于fis的一个标准预处理器插件。
##配置信息
fis-conf.js
```js
/*
//配置兼容信息具体参照postcss autoprefixer的配置格式
*/
fis.config.get("bowers_conf",['> 100%']);

/*
下为标准配置信息
*/
fis.config.merge({
    modules: {
        preprocessor: {
            css:"autoprefixer"
        }
    }
});
```
