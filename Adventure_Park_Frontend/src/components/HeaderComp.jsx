import React, { Component } from 'react';
import UserAuthService from './UserComponents/services/UserAuthService';

class navbarcomp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,

        };
    }

    logoutAction() {
        UserAuthService.logout();
    };

    componentDidMount() {

        const currnetUser = UserAuthService.getCurrentUser();
        if (!currnetUser) this.setState({ redirect: "/home" });
        else
            this.setState({ currentUser: currnetUser, userReady: true })
    };

    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="btn btn-dark" href="https://www.who.int/india/emergencies/coronavirus-disease-(covid-19)/india-situation-report" style={{ marginLeft: '10p%' }}>Covid Measures</a>
                    {(!this.state.userReady) ?
                        <a className="btn btn-dark" href="/login" style={{ marginLeft: '80%' }}>Login</a>
                        : null}
                    {(!this.state.userReady) ?
                        <a className="btn btn-dark" href="/signup" style={{ marginLeft: '10px' }}>Signup</a>
                        : null}
                    {(this.state.userReady) ?
                        <div className="" style={{ right: '0', top: '0', position: 'absolute' }}>
                            <div className="abtn btn-outline-primary btn-sm disabled ">
                                <div className="card border-primary" style={{ padding: '25px' }}>
                                    <strong className="card-title" style={{ fontSize: '20px' }}>
                                        <img
                                            src="//ssl.gstatic.com/accounts/ui/avatar_1x.png"
                                            alt="profile-img"
                                            className="avatar avatar-sm rounded-circle justify-content-center align-items-center"
                                            style={{ inlineSize: '20%', marginRight: '15px' }}
                                        />
                                        {this.state.currentUser.name}</strong>
                                    <a 
                                    className="btn btn-outline-danger btn-sm" 
                                    style={{marginTop:'10px'}} 
                                    href="/" 
                                    onClick={this.logoutAction}>Logout</a>

                                </div>
                            </div>
                        </div>
                        : null}

                </div>
                <div className="jumbotron text-center" style={{ height: '200px',backgroundColor: 'lightcyan' }}>
                    <h1 className="display-1 text-indigo" >Wonder Woods</h1>
                    <h5 className="display-9 " >Feel the nature</h5>
                </div>

            </div>
        );
    }
}

export default navbarcomp;


