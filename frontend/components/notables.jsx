import React from 'react';
class Notables extends React.Component {
    constructor(props) {
      super(props);
      const names= ["...Plays Guitar", "Pushing Through The Pavement",
       "Wake Up", "Wild & You",
      "Broken Parts"]
      const genres = ['classical',  'groove',  'electropop',
   'folk',  'synthwave']
      this.state = {names, genres
        }
    }
    // componentDidMount(){
    //     this.props.fetchAllAlbums();
    // }

    handleClick(album){
        this.props.history.push({pathname: `/band/${album.band_id}`,
        state: {albumId: album.album_id}});   
    }

    render(){
        const albums = this.props.albums;
        let fave_five = [];
        let {names} = this.state;
        for(let i=0; i<=4; i++){
            let album = albums.find(alb => alb.name === names[i]);
            if (!album) return <div></div>;
            fave_five.push(album);
        }
        return (
        <div className = 'nn'>
            <div className = 'row'>
                <div className = 'splash-section-header'> New and Notable</div>
            </div>
        <div className='fave-5'>

            {fave_five.map((faveAlb, i) => (
                <div className={'fave-single-wrapper'+ (i===0 ? 1 :'')} >
                     <img src={faveAlb.photoUrl} onClick={()=>this.handleClick(faveAlb)}/>
                     <div className = 'fave-title-and-band'>
                     <div className = 'fave-title' onClick={()=>this.handleClick(faveAlb)}> {faveAlb.name} </div>
                     <div className = 'fave-band-name' onClick={()=>this.handleClick(faveAlb)}> by {faveAlb.band.band_name} </div>
                     </div>
                     <p className = 'fave-genre'>{this.state.genres[i]}</p>
                     </div>
            ))}
        </div>
        </div>)
    }
}

export default Notables;