import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'

export class UpComingMovies extends Component {
    render() {
        return (
            <div>
                <CardColumns CardColumns style={{ display: "flex", flexWrap: "wrap" }}>
                {this.props.searchMovie.map(item => {

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
                </CardColumns>
            </div>
        )
    }
}

export default UpComingMovies