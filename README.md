# static-page-starter-template

## Prerequisites

Must have Node 6.9.0 or higher AND NPM v3.0 or higher and Yarn;
* [Install node and npm]([https://nodejs.org/en/download/)
* `npm install -g yarn`

## First time use

From the terminal run:
```
yarn install
```
Once all the dependencies have been installed type:
```
yarn run dev
```
This will start the webpack development server and open your browser. Any changes you make to your html, js, or scss files
will cause the browser to auto refresh.

## Build

From the terminal run:
```
yarn run build:prod
```
Project is compiled to dir called `dist`.

## Development

Start the dev server:
```
yarn run dev
```

### SCSS
[app.scss](https://github.com/TrimAgency/static-page-starter-template/blob/master/src/assets/scss/app.scss) is your SCSS entrypoint.  Your SCSS will be compliled to CSS.  If you need seperate SCSS files import them into app.scss.
For example, say you have an additional file called `_header.scss`. To import into `app.scss`:
```
@import 'header';
```
### Javascript
[app.js](https://github.com/TrimAgency/static-page-starter-template/blob/master/src/app.js) is your javascript entry point.
Webpack is using `babel` to compile the javascript to `es5`, so `es6` can be used. Most functionality should be placed inside:
```
$(document).ready(()=>{
  // place your jquery magic here
});
```
#### 3rd party javascript libraries
Install using `yarn add <library name>` then import into app.js. For example jQuery:
```
import $ from jQuery
```

### Images
Place images in the `src/assets/images/` folder.  
To reference the image in your html:
```
<img src"./assets/images/pic.svg" />
```
In your SCSS:
```
.image-class {
  background-image: url('../images/pic.svg');
  ...
}
```

### Fonts
Place font files in the `src/assets/fonts/` folder.
Then add a `@font-face` to `app.scss`:
```
@font-face {
  font-family: 'icomoon';
  src:  url('../fonts/icomoon.eot?cxl4ho');
  src:  url('../fonts/icomoon.eot?cxl4ho#iefix') format('embedded-opentype'),
        url('../fonts/icomoon.ttf?cxl4ho') format('truetype'),
        url('../fonts/icomoon.woff?cxl4ho') format('woff'),
        url('../fonts/icomoon.svg?cxl4ho#icomoon') format('svg');
 font-weight: normal;
 font-style: normal;
} 
 ```


