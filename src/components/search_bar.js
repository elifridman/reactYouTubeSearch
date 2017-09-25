import React,{Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:'Please enter value'};
  }
  render(){
    return(
      <div className="search-bar">
        <input value={this.state.term} onChange={this.onInputchange.bind(this)}/>

      </div>
    )

  }
  onInputchange(e){
    console.log(e.target.value);
    this.setState({term:e.target.value});
    this.props.onSearchTermChange(this.state.term);
  }
}

export default SearchBar;
