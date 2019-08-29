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
        if(!this.state.toggled){
            const app = document.getElementById('App')
        this.setState({toggled: true}, 
           () => app.addEventListener("click", this.outsideClickCallback)
            )
        }
        else {
        this.setState({toggled: false});}
    }

    outsideClickCallback(e){
        if (!e.target.parentNode.className.startsWith('header-dropdown')
        && !e.target.parentNode.className.startsWith('ball')) this.setState({toggled: false});
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
                {user.band_name ? 
                <div onClick={this.clickLink(`/band/${user.id}`)}
                className='header-dropdown-cmpd'>
                     <div className='dropdown-name'>{user.band_name}</div> 
                     <div className = 'header-dropdown-secondary'>view site</div></div> 
                    : null}
                <div onClick={this.clickLink(`/user/${user.id}`)} 
                className='header-dropdown-cmpd'>
                    <div className='dropdown-name'>{user.username}</div> 
                    <div className = 'header-dropdown-secondary'>view collection</div>
                    </div>
                <div onClick={this.props.logout}>log out</div>
            </div>
        )
    }
    render(){
        return(
        <div className='header-dropdown-container'>
            <div className = 'ball-hoversquare-container'>
            <div className = 'ball-hoversquare'
           onClick = {this.clickBall} >
            <div className='ball'
            ></div>
            </div>
            </div>
            {this.renderDropdown()}
        </div>)
    }
}
export default Dropdown;