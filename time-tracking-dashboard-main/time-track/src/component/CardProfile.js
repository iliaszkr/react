import React from 'react';
import foto from '../../src/images/image-jeremy.png'



class CardProfile extends React.Component {
    render() {
        return (
            <div className="jeremy">
                <div className="card cardprofile">
                    <img className="ms-5 mb-5 mt-3 borderfoto  " width="80" src={foto} alt="" />
                    <div>
                        <p className="ms-5 m-0 text-white">report for</p>
                        <h1 className="ms-5 text-white">Jeremy Robson</h1>
                    </div>
                </div>
                <div className=" time text-white d-flex flex-column justify-content-center" >
                    <p className="ms-5 mt-4" onClick={() => this.props.change("daily")} >Daily</p>
                    <p className="ms-5" onClick={() => { this.props.change("weekly")}} >Weekly</p>
                    <p className="ms-5 " onClick={() => { this.props.change("monthly")}}>Monthly</p>
                </div>
            </div>
        )
    }
}

export default CardProfile
