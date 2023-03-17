# Modern-Webpack-Boilerplate-with-Essential-Features

This Webpack boilerplate provides a solid foundation for modern web development projects, integrating popular features and optimizations out-of-the-box. The boilerplate includes support for JavaScript (ES6+), CSS, and HTML files, as well as popular libraries and tools such as Babel, AOS, and Typed.js.

## Create folder hierarchy and asset organization:

### Set up the project

```sh
mkdir -p hello-world/src/pages/home hello-world/src/assets/{fonts,images,videos} hello-world/src/shared
```
```sh
touch hello-world/LICENSE hello-world/package.json hello-world/package-lock.json hello-world/README.MD hello-world/webpack.config.js hello-world/.gitignore
```
```sh
touch hello-world/src/index.js hello-world/src/pages/home/{index.html,index.js,style.css} hello-world/src/shared/{font.css,footer.html,topnav.html}
```
```sh
cd hello-world
```

# Initialize NPM and install the required packages
```sh
npm init -y
```
```sh
npm install webpack webpack-dev-server webpack-cli copy-webpack-plugin html-webpack-plugin mini-css-extract-plugin css-loader sass-loader sass file-loader url-loader image-minimizer-webpack-plugin imagemin imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo terser-webpack-plugin bootstrap bootstrap-icons aos typed.js --save-dev
```
# Create the necessary files
```sh
touch index.html webpack.config.js src/index.js src/pages/home/index.html src/pages/home/index.js src/pages/home/style.css
```
Tree visualization:

```css
hello-world
├── LICENSE
├── package.json
├── package-lock.json
├── README.MD
├── webpack.config.js
├── .gitignore
└── src
    ├── assets
    │   ├── fonts
    │   ├── images
    │   └── videos
    ├── index.js
    ├── pages
    │   └── home
    │       ├── index.html
    │       ├── index.js
    │       └── style.css
    └── shared
        ├── font.css
        ├── footer.html
        └── topnav.html
```

Add your webpack config file.

Add your .babelrc file.

Add your HTML content.
Webpack Build Commands:

```sh

npx webpack --mode production

npx webpack --mode development

Webpack Serve Commands
```
```sh

npx webpack serve --mode production

npx webpack serve --mode development

```
