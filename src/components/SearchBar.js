import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {term: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    };

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form"> 
                <div className="field">
                <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(e) => this.setState({ term: e.target.value })} 
                    /> 
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;

// () are left off of the end of the onInputChange callback in the JSX so the function isn't called everytime it is rendered.
// Arrow functions work as a secondary way to "bind this"