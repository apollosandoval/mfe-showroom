import React from 'react';
import { createRoot } from "react-dom/client";

import Form from '../lib/index'

const App = () => <Form />;

createRoot(document.getElementById(('form-app'))).render(<App />);

