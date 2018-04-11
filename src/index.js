import React, {Component} from 'react';

import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video-list'

const API_KEY = 'AIzaSyDzdd-cUkipk_gQJHKLIGD2LaD4T3TXFuM';


class App extends Component {
    constructor(props){
        super(props);
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos
            })
        });

        this.state = {
            videos: []
        }
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.querySelector('.container'));

