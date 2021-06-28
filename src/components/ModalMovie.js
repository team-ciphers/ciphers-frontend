import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export class ModalMovie extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>

                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={this.props.poster_path} />
                            {/* <Card.ImgOverlay>
                            </Card.ImgOverlay> */}
                            <Card.Title>{this.props.original_title}</Card.Title>
                            <Card.Text>{this.props.vote_average}  </Card.Text>
                            <Card.Text>{this.props.release_date}  </Card.Text>
                            <Card.Text>{this.props.overview}  </Card.Text>
                        </Card.Body> </Card>



                </Modal>
            </div>
        )
    }
}

export default ModalMovie