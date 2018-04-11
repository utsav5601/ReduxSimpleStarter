import React, {Component} from 'react';

class SearchBar extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            term: 'test'
        }
    }
    render(){
       return (
            <div>
                <input 
                value={this.state.term}                
                onChange={event => this.setState({term:event.target.value})}  
                />
            </div>
       )
       
    }

    onInputChange(e) {
        console.log(this);
        this.setState({
            term: e.target.value
        })
    }
}

export default SearchBar;