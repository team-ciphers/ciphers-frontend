import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class ToWatchList extends Component {
    render() {
        return (
            <div style={{ margin: '20px 10% 20px 10%' }}>
                <Row xs={1} md={3} className="g-4">
                    {this.props.toWatchList.map(item => {
                        return (<Col>
                            <Card >
                                <Card.Body >
                                    <Card.Img variant="top" src={item.poster_path} />
                                    <Card.Title style={{ fontSize: '30px' }}>{item.original_title}</Card.Title>
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

export default ToWatchList