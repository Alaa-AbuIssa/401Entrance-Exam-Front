import axios from 'axios'
import React, { Component } from 'react'
import Digimon from './Digimon'

 class Main extends Component {
     constructor(props){
         super(props)
         this.state={
            server:process.env.REACT_APP_SERVER,
            showData:false,
            data:[],
            index:0,
         }
     }

     componentDidMount=async()=>{
         const resultData=await axios.get(`${this.state.server}/getData`)
         this.setState({
            data:resultData.data,
            showData:true
         })
     }
     

     addToFav=async(data)=>{
         await axios.post(`${this.state.server}/addToFav`,data)
     }


    render() {
        return (
            <>
                {
                    this.state.showData &&
                    this.state.data.map((item,index)=>{
                        return(
                            <Digimon
                            digimon={item}
                            index={index}
                            addToFav={this.addToFav}

                            
                            />
                        )
                    })
                }
            </>
        )
    }
}

export default Main
