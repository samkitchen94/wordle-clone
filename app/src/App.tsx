import React from 'react';
import BoxRow from './components/BoxRow';
import './styles/main.scss';

const App = () => {
    return (
        <div className="app">
            <h1>Wordle Clone</h1>
            <div className="box-table">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                    <BoxRow />
                ))}
                
            </div>
        </div>
    );
}

export default App;
