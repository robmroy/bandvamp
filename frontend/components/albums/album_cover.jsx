import React from 'react';

class CoverArtComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {imageUrl: "",
        imageFile: ""};
        this.handleFile=this.handleFile.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleFile(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
       {
        console.log("reader loadend");
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
        formData.append('post[title]', this.state.title);
        if (this.state.photoFile) {
      
          formData.append('post[photo]', this.state.photoFile);
        }
        $.ajax({
          url: '/api/posts',
          method: 'POST',
          data: formData,
          contentType: false,
          processData: false
        });
      }
    render(){
       
        return (
           <form onSubmit={this.handleSubmit}> 
           <input type="file"
            onChange={this.handleFile}
            />
            <img src={this.state.imageUrl}/>
            <input type="submit" value="Submit"/>
            </form>
        )
    }

}

export default CoverArtComponent;