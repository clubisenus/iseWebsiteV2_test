import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';




const mapStateToProps = state => {
    return {
		state:state.iseWebsite
    }
  }

const mapDispatchToProps =dispatch=>{
	return{
		ToggleNavBar: () => dispatch({ type: 'TOGGLE_Navbar' }),
	}

}
class TopBar extends Component {
	constructor(props) {
		super(props);
		/*
		this.state = {
			//navBar:true,
		};
		*/
	  }

    ToggleNavBar(){
		//this.setState({navBar:false})
		this.props.ToggleNavBar()
		
	}

    render(){
		this.ToggleNavBar = this.ToggleNavBar.bind(this)
        return(
            <AppBar>
                <header id="header">
                    <a href="https://nusiseclub.com" class="logo"><strong>NUS ISE Club</strong> </a>
                    <ul class="icons">
                        <li><a href="https://www.instagram.com/nus_ise/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="https://www.facebook.com/pg/NUSISEClub/" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                        <li><a href="https://www.linkedin.com/company/14617038/" class="icon brands style2 fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                        <li><a href="mailto:club.ise.nus@gmail.com" class="icon style2 fa-envelope" target="_blank"><span class="label">Email</span></a></li>
                    </ul>
                </header>

            </AppBar> 
        )
    }
}

//export default LeftDrawer2


export default withRouter(
    compose(
      connect(
		  mapStateToProps,
		  mapDispatchToProps)
    )(TopBar)
  )