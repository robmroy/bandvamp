import React from 'react';
import {Link, Redirect} from 'react-router-dom';    
class AlbumForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            album: {imageUrl: "",
        imageFile: null,
        name: "",
        band_id: props.session.id,
        description: ""},
        tracks: [],
        editingTrackNumber: null
        };
        this.handleAlbumCover=this.handleAlbumCover.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleAlbumText=this.handleAlbumText.bind(this);
        this.handleTrackText=this.handleTrackText.bind(this);
        // this.addTrack=this.addTrack.bind(this);
        this.addTrack2=this.addTrack2.bind(this);
        this.trigger = this.trigger.bind(this);
        this.addBlankTrack = this.addBlankTrack.bind(this);
    }
    componentDidMount(){
        this.props.clearReceivedAlbumId();
    }
    handleAlbumText(field){
        return e => {
            const album = this.state.album;
            album[field] = e.target.value;
            this.setState({album})
        }
    }
    handleTrackText(e, idx){
            let tracks = this.state.tracks.slice();
            tracks[idx]["name"]=e.target.value;
            this.setState({tracks});
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
        const tracks = this.state.tracks;
        if (!album.imageFile) delete album[imageFile];     
        this.props.createAlbum({album, tracks},
            () => this.props.history.push({pathname: `/band/${this.props.session.id}`
           })
           );

      }

    trigger(e, track_number){
        
        e.preventDefault();
        this.setState({editingTrackNumber: track_number}, 
            () => $('#track-input').trigger('click')); 
        
    }
    

    addBlankTrack(){
        let tracks = this.state.tracks.slice();
        tracks.push({name: "", track_number: tracks.length + 1});
        this.setState({tracks});
    }

    addTrack2(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
       {    
           const track_number = this.state.editingTrackNumber;
            let tracks = this.state.tracks.slice();
            let newSong = {songUrl: reader.result, audioFile: file, track_number, 
                name: tracks[track_number-1] ? tracks[track_number-1].name : ""}
            tracks[this.state.editingTrackNumber - 1] = newSong;
            this.setState({tracks});
            }

        if (file) {
            reader.readAsDataURL(file);
        }  
    }

    
    render(){
       const errors = this.props.errors || {};
       const album = this.state.album;
        const tracks = (<div>
            {this.state.tracks.map( (track, idx) => (
                <div key={idx}>
            <input type="text" 
            value={track.name}
            onChange={(e)=> {this.handleTrackText(e, idx);
            }} 
            />
            <a type="file" onClick={e => this.trigger(e,idx + 1)}>Upload audio</a>
            </div>)
            )}
        </div>);
        return (
            <div>
           <form onSubmit={this.handleSubmit} className="album-form"> 
        <div className='album-inputs-left'>
            <div className="track-inputs">
                {tracks}
                <input type="file" 
                className="hidden-input" 
            id = "track-input"
            onChange={(e)=>this.addTrack2(e)}/>
        <div  className="button-link add-track"
        onClick={this.addBlankTrack}> add track </div>
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
           className = "album-title-input"
           ></input>
    </div>

    <div className="outer-input-wrapper">
            Album Cover
           <input type="file"
            onChange={this.handleAlbumCover}
            className="album-cover-file-input"
            id = "alb-input"
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
           description (optional)
            <textarea
            className="description"
            onChange={this.handleAlbumText("description")}
           value={album.description}
           className='album-description-input'/>
    </div>
            </div>
           
            </form>

            
            </div>
        )
    }

}

export default AlbumForm;