import React, { Component } from 'react';

class Attractions extends Component {


    constructor(props) {
        super(props);
        this.state={
            username:""
        }
        
    }
    

    render() {
        return (
            <div
                style={{ position: 'relative' }}
            >
                <div
                    class="row" style={{ margin: '70px', width: '100%' }}>

                    <div class="card border-primary mb-3" style={{borderRadius: '15px',marginBottom: '15px'}}>
                        <div class="card-header text-success">All Time Favourite</div>
                        <div class="card-body text-success">
                            <h4 class="card-title">FOREST Park</h4>
                            <p class="card-text">Discription</p>
                            <div class="fluid">
                                <img class="imgincard" src="/images/forest/f1.jpg"></img>
                                <img class="imgincard" src="/images/forest/f2.jpg"></img>
                                <img class="imgincard" src="/images/forest/f3.jpg"></img>
                            </div>
                        </div>
                    </div>
                    <div class="card border-primary mb-1" style={{ borderRadius: '15px' }}>
                        <div class="card-header text-primary">Summer And Winter Special</div>
                        <div class="card-body text-primary">
                            <h4 class="card-title">RIVER Park</h4>
                            <p class="card-text">Discription</p>
                            <div class="fluid">
                                <img class="imgincard" src="/images/river/r1.jpg"></img>
                                <img class="imgincard" src="/images/river/r2.jpg"></img>
                                <img class="imgincard" src="/images/river/r3.jpg"></img>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default Attractions;