import React, { Component } from 'react';

class Navbar extends Component {

    // const collapse=

    constructor(props) {
        super(props);
        this.state={
            googlecdn:"https://www.google.com/",
            search:""
        }
    }

    hendelSearch = (e) =>{
        this.props.history.push(this.state.googlecdn+this.state.search);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    

    render() {

        const user=localStorage.getItem("user");
        let usernavbar;
        if(user)
        usernavbar=<div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" style={{position:'relative'}}>
        <div class="nav-item" style={{marginRight:'20px'}}>
                <a class="btn btn-sm btn-primary" href="showUserCart">Favourites</a>
            </div>
            <div class="nav-item" style={{marginRight:'20px'}}>
                <a class="btn  btn-sm btn-primary" href="bookingForm">Book Rides</a>
            </div>
            <div class="nav-item" style={{marginRight:'20px'}}>
                <a class="btn  btn-sm btn-primary" href="myBooking">My Bookings</a>
            </div>
            
        </nav>
    </div>
        

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    
                    <a className="navbar-brand " href="/">Navigate Woods</a>
                    <button className="navbar-toggler collapsed show" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"navbar-collapse collapse show"} id="navbarColor03">
                    <ul class="nav md-tabs sky-blue lighten-1 mx-0 mb-0 mt-1">
                            <li className="nav-item active" >
                                <a className="nav-link" href="/">Home
            <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active" >
                                <a className="nav-link" href="/attractions">Attractions
            <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active" >
                                <a className="nav-link" href="/ServiceList">Services
            <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active" >
                                <a className="nav-link" href="/events">Upcoming Rides
            <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active" >
                                <a className="nav-link" href="/packages">Packages
            <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active" >
                                <a className="nav-link" href="/tour">Wonder Tour
            <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text"
                            name="search"
                            value={this.state.search}
                            onChange={this.onChange}
                            placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0 text-primary" onClick={this.hendelSearch}>Search</button>
                        </form>
                    </div>
                </nav>

                {usernavbar}
            </div>
        );
    }
}

export default Navbar;



