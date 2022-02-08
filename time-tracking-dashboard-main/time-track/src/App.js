import React from "react";
import CardProfile from "./component/CardProfile";
import CardTime from "./component/CardTime";
import oefening from "../src/images/icon-exercise.svg"
import game from "../src/images/icon-play.svg"
import care from "../src/images/icon-self-care.svg"
import social from "../src/images/icon-social.svg"
import study from "../src/images/icon-study.svg"
import work from "../src/images/icon-work.svg"
import datajson from "./data.json"
console.log(datajson[0].timeframes.daily.current)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { temps: "daily" }

  }
  change = (x) => {
    this.setState({ temps: x })
  }
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center container my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <CardProfile 
              temps={this.state.temps}
              change = {this.change}
              />

            </div>
          <div className=" text-white col-lg-3 col-12">
            <CardTime 
            titre={datajson[0].title} 
            current= {datajson[0].timeframes[this.state.temps].current}
            previous= {datajson[0].timeframes.daily.previous}
            bgmain = "hsl(15, 100%, 70%)"
            bgcolor = "hsl(15, 100%, 70%)"
            logo = {work}
            />
            <CardTime 
            titre= {datajson[3].title}
            current= {datajson[1].timeframes[this.state.temps].current}
            previous= {datajson[0].timeframes.daily.previous}
            bgmain ="hsl(145, 58%, 55%)"
            bgcolor = "hsl(145, 58%, 55%)"
            logo={oefening}
            />
          </div>
          <div className=" text-white col-lg-3 col-12">
            <CardTime 
            titre= {datajson[1].title}
            current= {datajson[2].timeframes[this.state.temps].current}
            previous= {datajson[0].timeframes.daily.previous}
            bgmain="hsl(195, 74%, 62%)"
            bgcolor="hsl(195, 74%, 62%)"
            logo={game}
            />
            <CardTime 
            titre= {datajson[4].title}
            current= {datajson[3].timeframes[this.state.temps].current}
            previous= {datajson[0].timeframes.daily.previous}
            bgmain="hsl(264, 64%, 52%)"
            bgcolor="hsl(264, 64%, 52%)"
            logo={social}
            />
          </div>
          <div className=" text-white col-lg-3 col-12">
            <CardTime 
            titre= {datajson[2].title}
            current= {datajson[4].timeframes[this.state.temps].current}
            previous= {datajson[0].timeframes.daily.previous}
            bgmain="hsl(348, 100%, 68%)"
            bgcolor="hsl(348, 100%, 68%)"
            logo={study}
            />
            <CardTime
            titre= {datajson[5].title}
            current= {datajson[5].timeframes[this.state.temps].current}
            previous= {datajson[0].timeframes.daily.previous}
            bgmain="hsl(43, 84%, 65%)"
            bgcolor="hsl(43, 84%, 65%)"
            logo={care}
            />
          </div>
          </div>
        </div>  
      </div>
    )
  }
}
export default App;
