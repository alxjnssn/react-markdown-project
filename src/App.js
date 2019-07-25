import React, {useState} from 'react';
import 'barecss/css/bare.min.css';
import './App.css';
import MarkDown from './MarkDown';
import FormattedMarkDown from './FormattedMarkDown';

function App() {
  const [formattedMarkDown, setFormattedMarkDown] = useState('');
  return (
    <div className="App">
      <MarkDown setFormattedMarkDown={setFormattedMarkDown}/>
      <FormattedMarkDown formattedMarkDown={formattedMarkDown}/>
    </div>
  );
}

export default App;
