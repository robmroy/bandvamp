import React, { Component } from 'react';

class MusicPlayer extends Component {

  render () {
    return (
    
    <audio src='https://s3-us-west-1.amazonaws.com/bandstandapp-dev/AWS+Files/Creative+Commons+Music/Greg+Atkinson/7+Gifts/7+Gifts/Greg_Atkinson_-_01_-_7_Gifts.mp3' ref="audio_tag" 
    controls 
    // autoPlay
    ></audio>

    )
  }
}

export default MusicPlayer;