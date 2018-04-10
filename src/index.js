import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDzdd-cUkipk_gQJHKLIGD2LaD4T3TXFuM';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDom.render(<App/>, document.querySelector('.container'));

