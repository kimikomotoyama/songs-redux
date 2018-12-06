import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {
          this.props.songs && this.props.songs.map((song) => {
            return (
              <div className="ui divided list">
                <div className="item" key={song.title}>
                  <div className="right floated content">
                    <button onClick={() => this.props.selectSong(song)} className="ui button primary">Select</button>
                  </div>
                  <div className="content">
                    {song.title}
                  </div>
                </div>
                <div className="item">
                  {this.props.selectedSong && this.props.selectedSong.title}
                </div>
              </div>
            );
          }
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
    selectedSong: state.selectedSong
  }
}

export default connect(mapStateToProps, { selectSong })(SongList);