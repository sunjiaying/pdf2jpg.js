pdf2jpg.js
========

### A [NodeJS](http://nodejs.org) module for converting a PDF file to a JPG file.

This module does one thing, and one thing only.  It converts a PDF file to a JPG file.
It shold be used on single-page PDFs, but should you try to convert a multi-page PDF, only the first page will be converted.

## 作者
  - sunjiaying <sunjoin@gmail.com>

## 安装

To be able to use this module, the `ghostscript` tool must be installed.  On my Ubuntu machine, I installed it by typing:

```bash
$ sudo apt-get install ghostscript
```

如果是Windows系统，推荐使用scoop来安装ghostscript，这样能直接运行gs命令

Finally, you can install the `pdf2jpg.js` module itself, by typing:

```bash
$ npm install pdf2jpg.js
```

## Examples

The file `test.js` demonstrates this module in action.
