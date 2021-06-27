import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


export class UpComingMovies extends Component {
    render() {
        return (
            <div>
                {this.props.UpComingMoviesData.map(item => {

                    return (<Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.original_title}</Card.Title>
                            <Card.Img variant="top" src={item.poster_path} />
                            <Card.Text>  {item.vote_average}   </Card.Text>
                            <Card.Text>  {item.release_date}   </Card.Text>
                        </Card.Body> </Card>);
                }

                )}
                {console.log( this.props.searchMovie)};
            </div>
        )
    }
}

export default UpComingMovies