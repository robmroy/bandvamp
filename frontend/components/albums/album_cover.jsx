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
        formData.append('album[name]', "firstalbum");
        formData.append('album[band_id]', 1);
        const that = this;
        console.log(this.state.imageFile);
        if (this.state.imageFile) {
          formData.append('album[photo]', that.state.imageFile);
          console.log(Array.from(formData.entries()));
        }
        $.ajax({
          url: '/api/albums',
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