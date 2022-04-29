import React from "react";
import ReactDOM from "react-dom";

import Input from '@carvana/showroom/Input';

const App = () => {
  return (
    <div>
      <h1>Hello from Showroom</h1>
      <Input />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
