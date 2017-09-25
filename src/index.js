import _ from 'lodash';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCKvdTibaj-ToV29it-p2qPaPu-0NFEpWg';

//Create new component this component should prduce some html
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedVideo:null,
      videos:[]
    };

    this.videoSearch('surfboards');

  }
  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) =>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
      console.log(videos);
    });
  }
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return(
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList videos = {this.state.videos} onVideoSelect = {
          (selectedVideo) => this.setState({selectedVideo})
        }/>
      </div>
    );
  }
}


//take this components generated html and and put it in the dom
ReactDom.render(<App/>,document.querySelector('.container'));
