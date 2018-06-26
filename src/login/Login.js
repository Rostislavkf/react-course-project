import React, {Component} from 'react';
import classes from './Login.css';


const USERS = [
    {
        username: 'Rosko',
        password: 'Rosko'
    },
    {
        username: 'guest',
        password: 'guest'
    },
    {
        username: 'admin',
        password: 'admin'
    },
]


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleUsernameChange = (event) => {
        const username = event.target.value;

        this.setState({
            username
        });
    };

    handlePasswordChange = (event) => {
        const password = event.target.value;

        this.setState({
            password
        });
    };

    onLoginButtonClick = () => {
        const username = this.state.username
        const password = this.state.password

        const found = USERS.some(
            (element) => {
                return (element.username === username && element.password === password);
        })

        if(found){
            this.props.history.replace('/movies')
        }

    };

     render(){

         return(
         <div className={classes.Login}>
             Username: <input className={classes.Input} value={this.state.username} onChange= {(event) => this.handleUsernameChange(event)} type="text"></input>
             Password: <input className={classes.Input} value={this.state.password} onChange={(event) => this.handlePasswordChange(event)} type="password"></input>
             <button className={classes.Button} onClick={this.onLoginButtonClick}>Login</button>
         </div>
         )}

}

export default Login;

