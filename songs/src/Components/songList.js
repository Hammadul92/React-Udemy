import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';

class SongList extends React.Component{

	renderList(){
		return this.props.songs.map((song) => {
			return(
				<div className="item" key={song.title}>
                   <div className="right floated content">
                      <button className="ui button primary" onClick={() => this.props.SelectSong(song)}> 
                         Select
                      </button>
                   </div>
                   <div className="content">
                      {song.title}
                   </div>
				</div>
			);
		}) 
	}

	render(){
       return (
       	<div className="ui divided list">
       	    {this.renderList()}
       	 </div>
       );
	}
}

const mapStateToProps = (state) => {
	return {songs: state.songs};
}

const mapDispatchToProps = dispatch => {  
    return{
       SelectSong: (song) => dispatch({type: actionTypes.SONG_SELECTED, payload:song})
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(SongList);