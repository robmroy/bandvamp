import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import { relative } from 'path';
class MusicPlayer extends Component {

  constructor(props){
    super(props);
    const {currentTrackNumber, songs} = props;
    this.state = {playing: props.playing || false,
    handlingMouseMove: false,
    song: songs[currentTrackNumber - 1],
    currentTrackNumber
        }
    this.audio = React.createRef();
    this.intervalId = React.createRef();
    this.app = document.getElementById("App");
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidUpdate(prevProps){
    // if(prevProps.playing !== this.props.playing){
    //   this.setState({playing: this.props.playing})
    // }
  }
  
  play(){
    if (this.state.playing) return;
      const ac = this.audio.current;
      let sliderPos = 0;
      
      if (!this.state.playing){
        this.intervalId = setInterval(
          () => {if(!(this.state.handlingMouseMove)) {
            if (ac.currentTime === ac.duration){
              clearInterval(this.intervalId);
              this.nextSong();
            }
            this.setState({sliderPos:
             (ac ? 300 * ac.currentTime/ac.duration : 0)})}}, 100)}
    this.setState({playing: true});
    this.audio.current.play();
  }

  pause(callback){
    if (!this.state.playing) return;
    this.audio.current.pause();
    this.setState({playing: false}, () => {
      clearInterval(this.intervalId);
      if(callback) callback();
    });
  }

  swapPlayPause(){
    this.state.playing ? this.pause() : this.play();
  }

  sliderClick(e){
    console.log('slider click');
    const app = this.app;
    app.addEventListener('mousemove', this.handleMouseMove);
    app.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(e){
    const mpc = document.getElementById('progress-bar-container');
    const x = e.clientX - mpc.offsetLeft; 
    this.setState({sliderPos: x, handlingMouseMove: true});

  }

  handleMouseUp(e){
    const ac = this.audio.current;
    this.app.removeEventListener('mousemove',this.handleMouseMove)
    ac.currentTime = this.state.sliderPos * ac.duration /300;
    this.setState({handlingMouseMove: false})
  }

  async nextSong(){
    this.props.nextSong();
    const songs = this.props.songs;
    const numSongs = songs.length;
    let currentTrackNumber = this.state.currentTrackNumber + 1;
    currentTrackNumber = ((currentTrackNumber -1) % numSongs)+1;

   await this.setState({currentTrackNumber, song: songs[currentTrackNumber],
    sliderPos: 0});

    await this.pause();
    this.play();
  }

  playPauseIcon(){
    if (this.state.playing) {
      return <i className="fas fa-pause playpause-icon"/>
    } else {
      return <i className="fas fa-play playpause-icon"/>
    }
  }



  render () {
    const ac = this.audio.current;
    let {song} = this.state;
    return (
    <div>
    <audio src={song.audioUrl}
                        ref = {this.audio} controls
                     />
    <div className = 'music-player-controls'>
    <button className='playpause-btn' onClick={()=>this.swapPlayPause()}  >{this.playPauseIcon()}</button>
    <div id = 'progress-bar-container'>
      <div>{song.name}</div>
    <div className = "slider" 
      onMouseDown = {e => this.sliderClick(e)} 
      style={{left: this.state.sliderPos+'px'}}>
      sl
    </div>
    </div>
    </div>
    </div>
    )
  }
}

export default MusicPlayer;