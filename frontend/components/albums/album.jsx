import React from 'react';

class Album extends React.Component{
    constructor(props){
        super(props);
        this.state = {albums:
             props.entities.albums};
    }
    componentDidMount(){
        this.props.fetchAlbum();
    }
    render(){
        const id = this.props.match.params.albumId;
        const album = this.props.entities.albums[id];
        const photoUrl = album ?
        album.photoUrl : "";
        return (photoUrl ? 
        <> {photoUrl} <img src={photoUrl} /> </>:
        "nothing")
    }
}
export default Album;