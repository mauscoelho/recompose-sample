import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import registerServiceWorker from './registerServiceWorker';
import styles from './index.css';

ReactDOM.render(<App className={styles.app} />, document.getElementById('root'));
registerServiceWorker();
