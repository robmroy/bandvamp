import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import { relative } from 'path';
class MusicPlayer extends Component {

  constructor(props) {
    super(props);
    const { currentTrackNumber, songs } = props;
    this.state = {
      playing: props.playing || false,
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
    this.prevSong = this.prevSong.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.onloadHandler = this.onloadHandler.bind(this);
    this.progBarWidth = 250;
    this.sliderWidth = 24;
  }

  displayTime() {
    const ac = this.audio.current;
    return ac ? this.secondsToMinutes(ac.currentTime || 0) + '/'
      + this.secondsToMinutes(ac.duration || 0) : '';
  }

  componentDidUpdate(prevProps) {
    const { currentTrackNumber, songs, playing } = this.props;
    if (prevProps.songs !== songs) {
      this.setState({
        playing: playing || false,
        handlingMouseMove: false,
        song: songs[currentTrackNumber - 1] || songs[0],
        currentTrackNumber
      });
      return;
    }
    if (prevProps.currentTrackNumber !== currentTrackNumber) {
      this.setState({
        currentTrackNumber,
        song: this.props.songs[currentTrackNumber - 1]
      },
      )
    }
  }
  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  play() {
    let sliderPos = 0;

    if (!this.state.playing) {
      this.intervalId = setInterval(
        () => {
          const ac = this.audio.current;
          if (!(this.state.handlingMouseMove)) {
            if (ac.currentTime === ac.duration) {
              // clearInterval(this.intervalId);
              this.nextSong();
            }
            this.setState({
              sliderPos:
                (ac
                  ?
                  (this.progBarWidth - this.sliderWidth) * ac.currentTime / ac.duration
                  :
                  0)
            })
          }
        }, 100)
    }
    this.setState({ playing: true });
    this.audio.current.play();
  }

  pause() {
    if (!this.state.playing) return;
    this.audio.current.pause();
    this.setState({ playing: false }, () => {
      clearInterval(this.intervalId);
    })
  }

  swapPlayPause() {
    this.state.playing ? this.pause() : this.play();
  }

  sliderClick(e) {
    this.app.addEventListener('mousemove', this.handleMouseMove);
    this.app.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(e) {
    const pbc = document.getElementById('progress-bar-container');
    const x = Math.min(e.clientX - pbc.offsetLeft,
      this.progBarWidth - this.sliderWidth);
    this.setState({ sliderPos: x, handlingMouseMove: true });
  }

  handleMouseUp(e) {
    const ac = this.audio.current;
    this.app.removeEventListener('mousemove', this.handleMouseMove)
    this.app.removeEventListener('mouseup', this.handleMouseUp)
    ac.currentTime = this.state.sliderPos *
      ac.duration / (this.progBarWidth - this.sliderWidth);
    this.setState({ handlingMouseMove: false })
  }

  secondsToMinutes(floatStr) {
    let round = Math.floor(parseFloat(floatStr));
    let mins = Math.floor(round / 60);
    let secs = round % 60;
    if (secs < 10) { secs = '0' + secs; }
    return mins + ':' + secs;
  }


  nextSong() {
    const songs = this.props.songs;
    const numSongs = songs.length;
    let currentTrackNumber = this.state.currentTrackNumber + 1;
    // currentTrackNumber = ((currentTrackNumber -1) % numSongs)+1;

    this.setState({
      currentTrackNumber, song: songs[currentTrackNumber - 1],
      sliderPos: 0
    });
    this.props.nextSong();
  }

  prevSong() {
    const songs = this.props.songs;
    const numSongs = songs.length;
    let currentTrackNumber = this.state.currentTrackNumber - 1;
    // currentTrackNumber = ((currentTrackNumber -1) % numSongs)+1;

    this.setState({
      currentTrackNumber, song: songs[currentTrackNumber - 1],
      sliderPos: 0
    });
    this.props.prevSong();
  }

  onloadHandler() {
    if (this.state.playing) this.audio.current.play();
  }

  playPauseIcon() {
    if (this.state.playing) {
      return <i className="fas fa-pause playpause-icon" />
    } else {
      return <i className="fas fa-play playpause-icon" />
    }
  }

  render() {
    let { song, currentTrackNumber } = this.state;
    const backDisabled = currentTrackNumber === 1;
    const frwdDisabled = currentTrackNumber === this.props.songs.length;
    const ac = this.audio.current;
    return (
      <div>
        <audio src={song.audioUrl} ref={this.audio}
          onLoadedMetadata={this.onloadHandler}
        />
        <div className='music-player-controls'>
          <button className='playpause-btn' onClick={() => this.swapPlayPause()}  >{this.playPauseIcon()}</button>
          <div id='progress-bar-container'>
            <div className='track-info'>
              <span>{song.name} </span> &nbsp; <span> {this.displayTime()}</span>
            </div>
            <div className='flex'>
              <div className='progress-bar'></div>
              <button
                className="prev-btn"
                onClick={this.prevSong}
                disabled={backDisabled}>
                <i className="fas fa-fast-backward prev-btn" />
              </button>
              <button
                className="next-btn"
                onClick={this.nextSong}
                disabled={frwdDisabled}>
                <i className="fas fa-fast-forward next-btn" />
              </button>
            </div>
            <div className="slider"
              onMouseDown={e => this.sliderClick(e)}
              style={{ left: this.state.sliderPos + 'px' }}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MusicPlayer;