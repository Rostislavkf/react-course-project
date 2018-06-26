import React from 'react'
import classes from './Movie.css'

import { NavLink } from 'react-router-dom';


const movie = (props) => {
    return <div className={classes.Movie}>
        <p>Address: {props.address}</p>
        <p>Working time: {props.time}</p>
        <NavLink exact to={{ pathname: ('/movie/' + props.id)}}> Click to see the program of the movie </NavLink>
    </div>
}

export default movie;