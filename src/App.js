import React from "react";
import Search from "./component/search";
import Raitingfilter from "./component/raitingfilter"
import Film from "./component/film";
import "./App.css";


// ★☆



class App extends React.Component {
  state = {
    testInput: "",
    rate: 0,
    movielist: [
      {
        img:
          "https://media.senscritique.com/media/000005095459/source_big/Cadillac_Records.jpg",
        titlef: "Cadillac Records",
        raiting: 4
      },
      {
        img: "http://i-exc.ccm2.net/iex/1280/1088092624/727624.jpg",
        titlef: "Hannibal Lecter les origines du mal",
        raiting: 5
      },
      {
        img: "https://p6.storage.canalblog.com/63/95/1349409/121245014_o.jpg",
        titlef: "Bronson",
        raiting: 3
      },
      {
        img:
          "https://i.pinimg.com/originals/69/01/eb/6901eb10c6eabe24e130c9c0d03e7de6.jpg",
        titlef: "Modigliani",
        raiting: 2
      }
    ]
  };

  handleadd = (img, titlef, raiting) => {
    this.setState({
      movielist: this.state.movielist.concat({ img, titlef, raiting })
    });
    
  };
  getTestInput = str => {
    this.setState({
      testInput: str
    });
  };
  handleRaiting = (newRate) =>{
    this.setState({
      rate : newRate
    })
  }

  // handleSearch =(testInput)=>{
  //   this.setState({
  //     movielist : this.state.movielist.filter(el => el.titlef.includes(testInput))
  //   })
  //   return
  // }

  handleSearch = (movielist, testInput,rate) => {
    return (movielist.filter(el => el.raiting >= rate&&el.titlef.toLowerCase().includes(testInput.toLowerCase())));
  };


  // handleRateFilter=(movielist, rate)=>{
  //   return (movielist.filter(el =>))
  // }

  render() {
    
    return (
      <div className="App">
        <Search testinput={this.getTestInput} />
        <Raitingfilter raiting={this.state.rate} handleRate={(newRate)=>this.handleRaiting(newRate)} />
        <Film
          movielist={
            this.handleSearch(this.state.movielist, this.state.testInput, this.state.rate)}
          
          handleadd={this.handleadd}
        />
      </div>
    );
  }
}

export default App;
