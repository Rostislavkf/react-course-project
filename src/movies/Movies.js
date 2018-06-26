import React, {Component} from 'react'
import Movie from '../movie/Movie'

class Movies extends Component {

    state = {
        movies:
            [
                {
                    "id": "1",
                    "address": "adres",
                    "workingTime": '0-2'
                },
                {
                    "id": "2",
                    "address": "adres1",
                    "workingTime": '5-6'
                },
                {
                    "id": "3",
                    "address": "adres2",
                    "workingTime": '10-1234'
                }
            ]
}

    render(){
       return this.state.movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} time={movie.workingTime} address={movie.address}/>
        ))
    }

}

export default Movies;