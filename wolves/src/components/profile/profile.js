// import React, {useState,useEffect} from "react";
import React, {Component} from 'react'
import theoneste from "./../../assets/theoneste.jpg"
import "./profile.css"

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            items:[]
        }
    }
    
// the things will  be availabe after a page in mounted.
        async fecthingData(){
            await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
            .then(response=>response.json())
            .then(alldata=>{this.setState({
                items:alldata.data
                })  
            })     
        }

    componentDidMount(){
        this.fecthingData()
    }

    render(){
        return (
            <div>
                {this.state.items.map((element) =>(
                <div key={element.itemId} className="allItems">
                    <li>{element.item.name}</li>
                    <li>{element.item.description}</li>
                    <li>{element.item.rarity}</li>
                </div> 
                ))}
            </div>  
        )
    }   
}

export default Profile;