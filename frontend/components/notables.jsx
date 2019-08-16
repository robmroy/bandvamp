import React from 'react';
class Notables extends React.Component {
    constructor(props) {
      super(props);
      this.state = {names: ["...Plays Guitar",
    "Wild & You", "Wake Up", "Pushing Through The Pavement",
    "Broken Parts"]}
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
        return (<div className='fave-5'>

            {fave_five.map(fave_alb => (
                <div className='fave-single-wrapper' >
                     <img src={fave_alb.photoUrl} onClick={()=>this.handleClick(fave_alb)}/>
                     </div>
            ))}
        </div>)
    }
}

export default Notables;