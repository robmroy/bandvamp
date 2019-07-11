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
        toggled: false
        };
        this.handleFile=this.handleFile.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleText=this.handleText.bind(this);
    }
    handleText(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }
    handleFile(e){
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
    render(){
       const errors = this.props.errors || {};

    //    let album_errors = errors.album;
    //    album_errors = Array.isArray(album_errors) 
    //                     ?
    //                  album_errors
    //                     :
    //                 Object.values(album_errors);
        return (
            <div>
           <form onSubmit={this.handleSubmit} className="album-form"> 
        <div className='album-inputs-left'>
        <Link to="/signup/band" className="button-link add-track">
          add track</Link>
            <div className="track-inputs"></div>
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
            onChange={this.handleFile}
            />
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
            </div>
        )
    }

}

export default AlbumForm;