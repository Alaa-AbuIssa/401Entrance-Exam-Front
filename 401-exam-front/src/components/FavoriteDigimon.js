import React, { Component } from 'react'
import axios from 'axios'
import Favorite from './Favorite'
import UpdateForm from './UpdateForm'

export class FavoriteDigimon extends Component {
    constructor(props){
        super(props)
        this.state={
           server:process.env.REACT_APP_SERVER,
           showFavData:false,
           favData:[],
           index:0,
           showForm:false,
           name:'',
           img:'',
           level:''
        }
    }

    componentDidMount=async()=>{
        const resultData=await axios.get(`${this.state.server}/getFavData`)
        this.setState({
            favData:resultData.data,
            showFavData:true
        })
    }

    deleteFav=async(index)=>{
        const id = this.state.favData[index]._id

        const deleteFav=await axios.delete(`${this.state.server}/deleteFavData/${id}`)
        this.setState({
            favData:deleteFav.data
        })
    }


    nameHandler=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    imgHandler=(e)=>{
        this.setState({
            img:e.target.value
        })
    }
    levelHandler=(e)=>{
        this.setState({
            level:e.target.value
        })
    }

    showForm=(index)=>{
        const data=this.state.favData[index]
        this.setState({
            showForm:true,
            name:data.name,
            img:data.img,
            level:data.level,
            index:index
        })
    }

    updateFav=async(e)=>{
        e.preventDefault();
        // console.log("heloo");
        
        const  updatedData={
            name:this.state.name,
            img:this.state.img,
            level:this.state.level
    
        }
        
         const newData= await axios.put(`${this.state.server}/updateFavData/${this.state.index}`,updatedData)
         this.setState({
            favData: newData.data
         })
         
        
    }

    render() {
        return (
            <>
            {
                this.state.showForm && 
                <UpdateForm
                name={this.state.name}
                img={this.state.img}
                level={this.state.level}
                nameHandler={this.nameHandler}
                imgHandler={this.imgHandler}
                levelHandler={this.levelHandler}
                updateFav={this.updateFav}
                />
            }
        
              {
                    this.state.showFavData &&
                    this.state.favData.map((item,index)=>{
                        return(
                            <Favorite
                            digimon={item}
                            index={index}
                            deleteFav={this.deleteFav}
                            showForm={this.showForm}
                            
                            />
                        )
                    })
              
              }
            </>
        )
    }
}

export default FavoriteDigimon
