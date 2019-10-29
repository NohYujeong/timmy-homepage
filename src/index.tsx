import React, { FC } from 'react';
import ReactDom from 'react-dom';

const DemoPage: FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>happy coding!!!!!</h2>
    </div>
  );
};

ReactDom.render(<DemoPage />, document.getElementById('react-app'));
