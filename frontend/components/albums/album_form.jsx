import React from 'react';
class AlbumForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {imageUrl: "",
        imageFile: null,
        name: "",
        band_id: props.session.id,
        description: ""
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
          console.log(Array.from(formData.entries()));
        }
        this.props.createAlbum(formData);
      }
    render(){
       
        return (
           <form onSubmit={this.handleSubmit}> 
                <div className="errors">
                    {this.props.errors}
                </div>
            <div className="album-inputs">
            Album Name
           <input type="text"
           onChange={this.handleText("name")}
           value={this.state.name}
           ></input>
           
           Tracks
           <input type="text"></input>

           Description
            <input type="text" 
            className="description"
            onChange={this.handleText("description")}
           value={this.state.description}></input>

            Album Cover
           <input type="file"
            onChange={this.handleFile}
            />
            <img src={this.state.imageUrl}/>
            <br/>
            {this.state.ajaxUrl}
            <img src={this.state.ajaxUrl}/>
            <input type="submit" value="Submit"/>
            </div>
            </form>
        )
    }

}

export default AlbumForm;