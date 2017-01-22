import React from 'react';
import ReactDomServer from 'react-dom/server';

import BlogPage from './components/containers/blog-page';

const result = ReactDomServer.renderToString(
  React.createElement(BlogPage)
)

export default result;
