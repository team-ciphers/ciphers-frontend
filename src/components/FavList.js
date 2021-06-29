import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

export class FavList extends Component {
    render() {
        return (
            <div style={{ margin: '20px 10% 20px 10%' }}>
                <Row xs={1} md={3} className="g-4">
                    {this.props.movieList.map((item,index) => {
                        return (<Col>
                            <Card >
                                <Card.Body >
                                    <Card.Img variant="top" src={item.poster_path} />
                                    <Card.Title style={{ fontSize: '30px' }}>{item.original_title}</Card.Title>
                                    <Button onClick={() => this.props.deleteFavMovie(index)} variant="secondary">Remove</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}

export default FavList
