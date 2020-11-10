## Minimal React and Webpack 4 boilerplate with babel

### Project structure

```
dist/
src/
|- index.js     __________________________________ # Application entry
|- App.js       __________________________________ # Application init
|  |- assets/
|    |- style/
|       |- _custom.scss __________________________ # Custom Styling
|       |- main.scss    __________________________ # Combined styling
|    |- js/
|       |- utils.js    ___________________________ # Utility Functions
|  |- components/
|    |- CampaignItem/
|       |- CampaignItem.js _______________________ # Card/Campaign Item Component
|    |- CampaignDetail/
|       |- CampaignDetail.js _____________________ # Modal/Campaign Detail Component
|  |- views/
|    |- Home.js/     _____________________________ # Homepage view

webpack
|- webpack.config.js _____________________________ # webpack config
```

### Installation

1- Clone the repo

`git clone git@github.com:octosaryan/kitabisa-octosa.git`

2- `yarn` or `npm install` to install npm packages

3- start dev server using `yarn start` or `npm start`.

3- build and bundling your resources for production `yarn build` or `npm build`.

### Configuration

- `/webpack.config.js` main webpack config that merge common and webpack environment based config.
- Babel config `/.babelrc`.

#### Technologies used

- [Webpack 4](https://github.com/webpack/webpack)
- [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
- [React](https://github.com/facebook/react) `16.13.1`
- [Lodash](https://github.com/lodash/lodash)
- [Ant Design](https://github.com/ant-design/ant-design/)
- [Reactstrap](https://github.com/reactstrap/reactstrap)
- [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
- [CSS modules](https://github.com/css-modules/css-modules) [ Isolated style based on each component ]
- [React hot loader](https://github.com/gaearon/react-hot-loader)
- [Webpack dev serve](https://github.com/webpack/webpack-dev-server)
