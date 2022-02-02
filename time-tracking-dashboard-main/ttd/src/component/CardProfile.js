import React from 'react'




class CardProfile extends React.Component {
    render() {
        return (
            <div className=" card bg-danger py-5">
                <img className="img-fluid" src={this.props.profile} />
                
            </div>
        )
    }
}

export default CardProfile