import React from 'react';
import ellipsis from '../images/icon-ellipsis.svg'



class CardTime extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.bgmain }} className=  "logokleur">

                <div style={{ backgroundColor: this.props.bgcolor }} className="card cardtime d-flex justify-content-start align-items-end">
                    <img className="ms-5 mb-5 mt-3 borderfoto2 me-4" src={this.props.logo} width="80" alt="" />
                    

                </div>
                <div className=" kleurcardtime2 mb-3 py-4 card">
                    <div className="d-flex justify-content-between container">
                        <p className=" fs-5">{this.props.titre}</p>
                        <div className="">
                            <img className="bang" src={ellipsis} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <p className="text-white mb-0 h2"> {this.props.current} hrs</p>
                        <p className="text-white mt-4">Last week {this.props.previous} hrs</p>
                    </div>
                </div>
            </div>


        )
    }
}


export default CardTime;