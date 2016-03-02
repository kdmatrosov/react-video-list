/**
 * Created by root on 02.03.16.
 */

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_YOUTUBE = 'AIzaSyDiHZT2mmAFYQx5e0lX5eVc7m8id81qdOg';


class App extends Component {
	constructor(props)
	{
		super(props);
		this.state = {videos: []};
		
		YTSearch({key: API_YOUTUBE, term: 'Разведвопрос'}, (videos) => {
			this.setState({videos})
		});
	}
	render(){
		return (<div>
			<SearchBar/>
			<VideoList videos={this.state.videos}/>
		</div>);
	}
};
const container = document.querySelector('.container');
ReactDom.render(<App/>, container);