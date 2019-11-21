import React from 'react';
import AlbumPlayerContainer from './albums/album_player_container';
import Follow from './follow';
class Band extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fullDesc: false
    }
    this.renderDesc = this.renderDesc.bind(this);
    this.negateFullDesc = this.negateFullDesc.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBand();
    const user = this.props.user;
    if (user && !user.followed_bands) {
      this.props.fetchUser(user.id);
    }
    const lstate = this.props.location.state || {};
    const { albumId, songId, faveTrackNum } = lstate;
    this.setState({albumId, songId, faveTrackNum});
    this.props.history.replace({state: {}});
  }

  componentDidUpdate(prevProps) {
    const lstate = this.props.location.state || {};
    const { albumId, songId } = lstate;
    const plstate = prevProps.location.state || {};

    if (this.props.wildcard !== prevProps.wildcard
    ) {
      return this.props.fetchBand();
    }

    // if (albumId !== plstate.albumId ||
    //   songId !== plstate.songId) {
    //   this.setState({ songId, albumId });
    // }
    if(albumId && this.state.albumId !== albumId){
      if(songId && this.state.songId !== songId){
        this.setState({songId, albumId})}
        else{
      this.setState({albumId})}
        }
      else{
        if(songId && this.state.songId !== songId){
          this.setState({songId})}
      }
    
      if(albumId || songId) this.props.history.replace({state: {}});

  }
  renderDesc() {
    const { band } = this.props;
    if (!band.band_description) return '';
    let descStr = band.band_description + ' ';
    const lim = 20;
    const { fullDesc } = this.state;
    if (!band) return '';
    const words = band.band_description.split(' ');
    if (!fullDesc && words.length > lim + 2) {
      let trunc = words.slice(0, lim);
      const lastWord = trunc[lim - 1];

      if ([",", "."].includes(lastWord[lastWord.length - 1])) {
        trunc[lim - 1] = trunc[lim - 1].slice(0, lastWord.length - 1)
      }
      descStr = trunc.join(' ') + "... ";
    }

    return <div className='band-desc'>{descStr}
      {words.length > lim + 2 ? <span className='more-less' onClick={this.negateFullDesc}>
        {fullDesc ? 'less' : 'more'}</span> : null}</div>

  }

  negateFullDesc() {
    const fullDesc = !this.state.fullDesc;
    this.setState({ fullDesc });
  }
  clickAlbum(album) {
    this.setState({ albumClicked: true, albumId: album.id, songId: null })
  }

  render() {
    const { band, user } = this.props;
    if (!band || (user && !user.followed_bands)) return '';
    const { albumId, songId, faveTrackNum } = this.state;
    const albums = Object.values(band.albums);
    const album = albums.length ? albums.find(a => (a.id === albumId)) || albums[0] : { songs: [] };
    album.songs.sort((s, t) => s.track_number - t.track_number)
    const bannerUrl = band.bannerUrl;
    const photoUrl = band.photoUrl;
    const banner = !bannerUrl || bannerUrl.endsWith("345892746528734589234728") ?
      "" : <img src={bannerUrl} className="banner" />;
    const photo = !photoUrl || photoUrl.endsWith("345892746528734589234728") ?
      "" : <img src={photoUrl} className="band-photo" />;
    return (
      <div className='band-page' style={{ backgroundColor: band.background_color || "white" }}>
        <div className='band-page-content'>

          <div className="banner-wrapper">
            {banner}
          </div>

          <div className="band-page-body">
            <div className='band-page-columns-container'>


              {album.songs.length ? <AlbumPlayerContainer album={album} band={band} songId={songId}
                faveTrackNum={faveTrackNum} user={this.props.user} /> : null}

              <div className='band-column-3'>
                <div className='band-name-col-3'> {band.band_name}</div>
                {photo}
                <Follow band_id={band.id} ver='2' />
                {this.renderDesc()}

                {albums.length ? (<><div> discography</div>

                  <div className="band-albums"> {albums.map(alb => (
                    <div key={alb.id} onClick={() => { this.setState({ albumId: alb.id }) }}>
                      <img className='album-120 link' src={alb.photoUrl} />
                      <div className='link' style={{ fontSize: '12px' }}>{alb.name}</div>
                    </div>
                  ))}</div></>) : ''}

              </div>

            </div>
          </div>
        </div>
      </div>)
  }
}

export default Band;