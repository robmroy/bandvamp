import React from 'react';
import {Link} from 'react-router-dom';    
class AlbumForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {imageUrl: "",
        imageFile: null,
        name: "",
        band_id: props.session.id,
        description: "",
        toggled: false,
        tracks: []
        };
        this.handleAlbumCover=this.handleAlbumCover.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleText=this.handleText.bind(this);
        this.handleTrackText=this.handleTrackText.bind(this);
    }
    handleText(field){
        return e => {
            this.setState({[field]: e.target.value})
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
        this.setState({ imageUrl: reader.result, imageFile: file});}

        if (file) {
            reader.readAsDataURL(file);
        } 
        else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('album[name]', 
        this.state.name);
        formData.append('album[band_id]', 
        this.state.band_id);
        formData.append('album[description]',
        this.state.description);
        const that = this;
        if (this.state.imageFile) {
          formData.append('album[photo]', that.state.imageFile);
        //   console.log(Array.from(formData.entries()));
        }
        this.props.createAlbum(formData);
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
            let tracks = this.state.tracks;
            let newSong = {songUrl: reader.result, audioFile: file, track_number: 
            tracks.length + 1, name: ""}
            this.setState({tracks: tracks.concat(newSong)});
            }
        // this.setState({ imageUrl: reader.result, imageFile: file});}

        if (file) {
            reader.readAsDataURL(file);
        } 
    }

    
    render(){
       const errors = this.props.errors || {};
        const tracks = 
        (<div>
            {this.state.tracks.map( (track, idx) => (
                <div key={idx}>
            <input type="text" 
            value={this.state.tracks[idx].name}
            onChange={(e)=> {this.handleTrackText(idx)(e);
                console.log("here");
            }} 
            />
            </div>)
            )}
        </div>)
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
                {this.state.name || !this.state.toggled ? "" : "Please enter an album title"}
                </div>
     <div className="outer-input-wrapper">
            Album Name
           <input type="text"
           onChange={this.handleText("name")}
           value={this.state.name}
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
                        className={this.state.imageUrl ?
                            "album-cover-wrapper"
                            : ""}>
                             <img src={this.state.imageUrl}
                                className='album-cover'/>
                    </div>
            </div>
    
    <div className="outer-input-wrapper">
           Description
            <input type="text" 
            className="description"
            onChange={this.handleText("description")}
           value={this.state.description}></input>
    </div>
            </div>
           
            </form>


            <input type="file" className="hidden-input" onChange={(e)=>this.addTrack(e)}/>
            </div>
        )
    }

}

export default AlbumForm;