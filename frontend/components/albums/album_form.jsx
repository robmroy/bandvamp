import React from 'react';
import {Link} from 'react-router-dom';    
class AlbumForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            album: {imageUrl: "",
        imageFile: null,
        name: "",
        band_id: props.session.id,
        description: ""},
        toggled: false,
        tracks: []
        };
        this.handleAlbumCover=this.handleAlbumCover.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleAlbumText=this.handleAlbumText.bind(this);
        this.handleTrackText=this.handleTrackText.bind(this);
    }
    handleAlbumText(field){
        return e => {
            const album = this.state.album;
            album[field] = e.target.value;
            this.setState({album})
        }
    }
    handleTrackText(idx){
        return e => {
            let tracks = this.state.tracks;
            tracks[idx]["name"]=e.target.value;
            this.setState({tracks});
        }
    }
    handleAlbumCover(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
       {
           const album = this.state.album;
           album.imageUrl = reader.result;
           album.imageFile=file;
        this.setState({ album});}

        if (file) {
            reader.readAsDataURL(file);
        } 
    }

    handleSubmit(e) {
        e.preventDefault();
        const album = this.state.album;
        if (!album.imageFile) delete album[imageFile];        
        this.props.createAlbum(album);
        this.state.toggled = true;
      }

    handleAddTrackLink(e){
        e.preventDefault();
        $('.hidden-input').trigger('click'); 
    }
    
    addTrack(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
       {    
           const album=this.state.album;
            let tracks = this.state.tracks;
            let newSong = {songUrl: reader.result, audioFile: file, track_number: 
            tracks.length + 1, name: ""}
            console.log("new tracks:");
            console.dir(tracks.concat(newSong));
            this.setState({tracks: tracks.concat(newSong)});
            }
        // this.setState({ imageUrl: reader.result, imageFile: file});}

        if (file) {
            reader.readAsDataURL(file);
        } 
    }

    
    render(){
        console.log("render:")
        console.dir(this.state.tracks);
       const errors = this.props.errors || {};
       const album = this.state.album;
        const tracks = (<div>
            {this.state.tracks.map( (track, idx) => (
                <div key={idx}>
            <input type="text" 
            value={track.name}
            onChange={(e)=> {this.handleTrackText(idx)(e);
                console.log("here");
            }} 
            />
            </div>)
            )}
        </div>);
        return (
            <div>
           <form onSubmit={this.handleSubmit} className="album-form"> 
        <div className='album-inputs-left'>

        <Link to="/album" type="file" className="button-link add-track"
        onClick={(e) => this.handleAddTrackLink(e)}> add track </Link>
        
            <div className="track-inputs">
                {tracks}
                
            </div>
        <div className = 'album-submit-buttons'>
          <input type="submit" className="save-draft"
           value = "Save Draft" />
          <input type="submit" className="publish"
           value = "Publish" />
        </div>     
        </div>
            <div className="album-inputs-right">
            <div className="errors">
                {album.name || !this.state.toggled ? "" : "Please enter an album title"}
                </div>
     <div className="outer-input-wrapper">
            Album Name
           <input type="text"
           onChange={this.handleAlbumText("name")}
           value={album.name}
           ></input>
    </div>

    <div className="outer-input-wrapper">
            Album Cover
           <input type="file"
            onChange={this.handleAlbumCover}
            ></input>
     </div>       
            <div className="album-page-c2">
                    <div 
                        className={album.imageUrl ?
                            "album-cover-wrapper"
                            : ""}>
                             <img src={album.imageUrl}
                                className='album-cover'/>
                    </div>
            </div>
    
    <div className="outer-input-wrapper">
           Description
            <input type="text" 
            className="description"
            onChange={this.handleAlbumText("description")}
           value={album.description}></input>
    </div>
            </div>
           
            </form>


            <input type="file" className="hidden-input" onChange={(e)=>this.addTrack(e)}/>
            </div>
        )
    }

}

export default AlbumForm;