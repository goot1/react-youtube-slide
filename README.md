react-youtube-slide
=============================

Youtube thumnail slide and player
<div>
  <img src="https://postfiles.pstatic.net/MjAxOTA1MDhfMTY2/MDAxNTU3MzAzOTUwOTY0.orhWrfh1nGrlweALhL75i9HRxRgynwI_ot6mZfva30wg.n0m5xsF655ictQnpcFD05y5TtZ-bPxNNy1xDmrPzEbcg.PNG.0117585682/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2019-05-08_%EC%98%A4%ED%9B%84_5.22.02.png?type=w773" />  
</div>

## Installation

```
$ npm install react-youtube-slide
```

Usage
----
```js
  <Gallery
    youtubes={Json}
    galleryId={String} 
  />
```

Example
-----

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-youtube-slide';

const RESCOURCES = [
    {
      id: "9bZkp7q19f0",                //youtube id
      title: "[Psy]Gangnam style",      //thumnail title
      descrp : "Psy - Gangnam style"    //thumnail desciption
    },
    {
      id: "XsX3ATc3FbA",
      title: "(Boy With Luv) feat. Halsey' Official MV",
      descrp : "BTS - (Boy With Luv) feat. Halsey' Official MV"
    }
    ...
  ]

//parameter name must be youtubes and galleryId
ReactDOM.render(<Gallery youtubes={RESCOURCES} galleryId='gallery1' />,
document.getElementById('root'));

```

