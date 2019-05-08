react-youtube-slide [![Build Status](https://travis-ci.org/troybetz/react-youtube.svg?branch=master)](https://travis-ci.org/troybetz/react-youtube)
=============================

Youtube thumnail slide and player

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
ReactDOM.render(<Gallery youtubes={RESCOURCES} galleryId='gallery1' />, document.getElementById('root'));

```

