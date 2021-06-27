import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export class ModalMovie extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{this.props.original_title}</Card.Title>
                                <Card.Img variant="top" src={this.props.poster_path} />
                                <Card.Text>  {this.props.vote_average}  </Card.Text>
                                <Card.Text>  {this.props.release_date}  </Card.Text>
                                <Card.Text> {this.props.overview}  </Card.Text>
                            </Card.Body> </Card>
                        
                    </Modal.Body>
                    <Modal.Footer>
                         
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalMovie