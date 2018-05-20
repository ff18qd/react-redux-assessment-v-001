import React, { Component } from 'react';
import './App.css';
import Nextstops from './Nextstops';

// const nextstops = [
//     {
//         name: "Sichuan",
//         budget: 4500,
//         img_url: "http://www.pctours.com/wp-content/uploads/2014/10/Sichuan4.jpg",
//         like: 0,
//         dislike: 0
//     },
//     {   
//         name: "Berlin",
//         budget: 5500,
//         img_url: "https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748",
//         like: 0,
//         dislike: 0
//     }
// ]

class App extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            nextstops: [],
        };
        
    }
    
    componentDidMount() {
        // fetch("https://80887eaf7a0b474e9fa06d513302b5b6.vfs.cloud9.us-east-2.amazonaws.com:8080/api/nextstops")
        fetch("https://80887eaf7a0b474e9fa06d513302b5b6.vfs.cloud9.us-east-2.amazonaws.com:8080/api/nextstops", {
            //   headers : { 
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            //   },
            //   mode: 'no-cors',
              credentials: "include"
            }
        )
            .then(response => response.json())
            .then(nextstops => {
                console.log(nextstops);
                this.setState({nextstops})})

        //  fetch("https://18.219.2.46:8080/api/nextstops").then((response) => {
        //   if (response.ok) {
        //       console.log(response)
        //     return response.json();
        //   } else {
        //     throw new Error('Something went wrong');
        //   }
        // })
        // .then(
        //   // Do something with the response
        //   nextstops => this.setState({nextstops})
        // )
        // .catch((error) => {
        //   console.log(error)
        // });  
    
    }
    
    
    render() {
        console.log(this.state)
        return (
            <div className="App">
                App container
                <Nextstops nextstops={this.state.nextstops}/>
            </div>
        )
    }
}

export default App;