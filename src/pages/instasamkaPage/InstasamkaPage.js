import React from 'react'
import classes from "../buzovaPage/buzovaPage.module.css";
import BuzovaPage from "../buzovaPage/BuzovaPage";

class InstasamkaPage extends React.Component{
    constructor(){
        super()
        this.state={
            userList:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(data=>this.setState({userList: data}))

    }
    render(){
        return(
            <>
                <h1 className={classes.red}>Userlist</h1>
                <BuzovaPage names={this.state.userList} btn={this.getInfoOne}/>
            </>
        )
    }
}
export default InstasamkaPage;