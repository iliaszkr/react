import React from 'react';
import TimeCard from './component/TimeCard';
import CardProfile from './component/CardProfile'
import jeremy from "./images/image-jeremy.png"

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row justif'>
          <div className='col-md-3 col-12 '>
            <CardProfile 
            profile={jeremy}
            
            />

          </div>
          <div className='col-lg-3 col-12'>
            
              <div className="col-lg-3 col-12">
                <TimeCard />
              
                <TimeCard />
              </div>
              <div className="col-lg-3 col-12">
                <TimeCard />
              
                <TimeCard />
              </div>
              <div className="col-lg-3 col-12">
                <TimeCard />
              
                <TimeCard />
              </div>

            
          </div>
        </div>

      </div>
    )
  }
}

export default App;
