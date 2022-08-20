import ReactDOM from 'react-dom';
import { mergeStyles } from '@fluentui/react';
import App from './App';

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
