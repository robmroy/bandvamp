import React from 'react';
import NotablesContainer from './notables_container';
import SellingNow from './selling_now';
class Showcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brightness: [null, '', '', ''] };
  }

  brighten(i) {
    let brightness = this.state.brightness;
    brightness[i] = '-bright';
    return () => this.setState({ brightness });
  }
  darken(i) {
    let brightness = this.state.brightness;
    brightness[i] = '';
    return () => this.setState({ brightness });
  }

  componentDidMount() {
    const { fetchAllAlbums, location, openModal } = this.props;
    fetchAllAlbums();
    window.scrollTo(0, 0);
    if (location.pathname.startsWith('/signup')) {
      openModal(location.pathname.slice(1));
    }
  }

  componentDidUpdate(prevProps) {
    const pathname = this.props.location.pathname;
    if (prevProps.location.pathname !== pathname
      && pathname.startsWith('/signup')) {
      return this.props.openModal(pathname.slice(1));
    }

    if (prevProps.modal && !this.props.modal) {
      this.props.history.push('/');
    }

  }
  featureClickHandler(album, faveTrackNum) {
    this.props.history.push({
      pathname: `/band/${album.band_id}`,
      state: {
        albumId: album.album_id,
        faveTrackNum
      }
    });
  }
  render() {
    const albums = this.props.albums;
    const wtc = albums.find(alb =>
      alb.name === "Bach: Well​-​Tempered Clavier, Book 1")
    if (!wtc) return '';

    const [brighten, darken] = [this.brighten.bind(this), this.darken.bind(this)];

    return (
      <div className='showcase'>
        <div className='showcase-pics-container'>
          <div className='showcase-large' >
            <img className='showcase-large-pic' src={window.shura} />
            <div className='showcase-pic-main-text'>On "forever," Shura Keeps Love Center Stage</div>

            <a target="_blank" href="https://daily.bandcamp.com/2019/08/12/shura-forevher-interview/">
              <div className='read-more-container'>
                <div className='read-more'>read more</div>
                <div className='read-more-external-link'> external link </div>
              </div>
            </a>

          </div>
          <div className='small-pics-container'>
            <div className='small-pic-item'>
              <div className={'small-pic' + this.state.brightness[1]} style={{ backgroundImage: 'url(' + window.sidepic1 + ')' }}
                onMouseEnter={() => { brighten(1)(); }}
                onMouseLeave={() => darken(1)()}
                onClick={() => this.featureClickHandler(wtc, 5)}
              >
              </div>
              <div className='small-pic-text'
                onClick={() => this.featureClickHandler(wtc, 5)}
                onMouseEnter={() => { brighten(1)() }} onMouseLeave={() => darken(1)()}>High Scores: Ben Prunty’s Moody, Trance-Inspired “Photographs” OST</div>
            </div>

            <div className='small-pic-item'>
              <div className={'small-pic' + this.state.brightness[2]} style={{ backgroundImage: 'url(' + window.sidepic2 + ')' }}
                onMouseEnter={() => { brighten(2)(); }}
                onMouseLeave={() => darken(2)()}
                onClick={() => this.featureClickHandler(wtc, 5)}
              >

              </div>
              <div className='small-pic-text'
                onClick={() => this.featureClickHandler(wtc, 5)}
                onMouseEnter={() => { brighten(2)() }}
                onMouseLeave={() => darken(2)()}>Gabe 'Nandez Finds a Home in Hip-Hop</div>
            </div>

            <div className='small-pic-item'>
              <div className={'small-pic' + this.state.brightness[3]} style={{ backgroundImage: 'url(' + window.sidepic3 + ')' }}
                onMouseEnter={() => { brighten(3)(); }}
                onMouseLeave={() => darken(3)()}
                onClick={() => this.featureClickHandler(wtc, 5)}
              >
              </div>
              <div className='small-pic-text'
                onClick={() => this.featureClickHandler(wtc, 5)}
                onMouseEnter={() => { brighten(3)() }}
                onMouseLeave={() => darken(3)()}>Gabber Modus Operandi Galvanize Indonesian Folk Into Feverish Footwork</div>
            </div>

          </div>
        </div>
        <div className='showcase-section-2'>
          <SellingNow albums={albums}
            push={this.props.history.push} />
        </div>
        <div className='blue-body'>
          <NotablesContainer />
        </div>
      </div>
    )

  }
}

export default Showcase;