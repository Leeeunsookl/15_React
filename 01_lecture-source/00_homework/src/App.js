// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import './Css.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
    return (
        <div className="container">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


export default App;
