import React from 'react';

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {toggled: false}
        this.clickBall = this.clickBall.bind(this);
        this.renderDropdown = this.renderDropdown.bind(this);
        this.outsideClickCallback = this.outsideClickCallback.bind(this);
        this.clickLink = this.clickLink.bind(this);
    }

    componentWillUnmount(){
        const app = document.getElementById('App')
        app.removeEventListener("click", this.outsideClickCallback)
    }
    clickBall(){
        console.log('clickball')
        this.setState({toggled: true})
        const app = document.getElementById('App')
        app.addEventListener("click", this.outsideClickCallback)
    }

    outsideClickCallback(e){
        if (e.target.parentNode.className !== 'header-dropdown') this.setState({toggled: false});
    }

    clickLink(url){
       return () => { this.setState({toggled: false});
        this.props.push(url);
        }
    }

    renderDropdown(){
        const user = this.props.user;
        if(this.state.toggled)return(
            <div className='header-dropdown'>
                {user.band_name ? <div onClick={this.clickLink(`/band/${this.props.user.id}`)}>
                    band page</div> 
                    : null}
                <div onClick={this.clickLink(`/user/${this.props.user.id}`)}>collection</div>
                <div onClick={this.props.logout}>log out</div>
            </div>
        )
    }
    render(){
        return(
        <div className='header-dropdown-container'>
            <div className='ball'
            onClick = {this.clickBall}></div>
            {this.renderDropdown()}
        </div>)
    }
}
export default Dropdown;