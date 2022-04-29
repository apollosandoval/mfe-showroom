import React from "react";
import ReactDOM from "react-dom";

import Input from 'mf-input/Input';
import Menu from 'mf-menu/Menu';

const App = () => {
  return (
    <div>
      <h1>Hello from Showroom</h1>
      <Input />
      <Menu />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
