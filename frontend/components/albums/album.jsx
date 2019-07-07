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
        console.log(`id is ${id}`)
        console.log(`state is:`);
        console.log(this.state);
        console.log("props:");
        console.log(this.props);
        const album = this.props.entities.albums[id];
        const photoUrl = album ?
        album.photoUrl : "";
        console.log(window.getState());
        return (photoUrl ? 
        <> {photoUrl} <img src={photoUrl} /> </>:
        "nothing")
        // return <> album: 
        
        // {photoUrl || "nothing"}
       
        // </>
    }
}
export default Album;