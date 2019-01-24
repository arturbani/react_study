import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    if (!this.props.song) return <div>Select a Song!</div>;

    return (
      <div>
        <h3>Details for:</h3>
        <p>
          <b>Title:</b> {this.props.song.title} <br />
          <b>Duration:</b> {this.props.song.duration}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
