import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withAuth0 } from "@auth0/auth0-react";
import './Reviews.css';

export class Reviews extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <div>
                {
                    isAuthenticated ?
                        <Form onSubmit={(e) => this.props.createReview(e)}>
                            <Form.Group className=" reviewForm" controlId="review">
                                <Form.Label style={{ fontWeight: 'bold', margin: '0' }}>Add your review</Form.Label>
                                <Form.Control as="textarea" placeholder="Add your review" rows={2} />
                            </Form.Group>
                            < Button className="reviewButton btn btn--primary btn--menu" type="submit" style={{ margin: "10px 20px 15px 0" }}>submit</Button>
                        </Form>
                        :
                        <p>Please login to write your own review...</p>
                }
                <div className="reviewDiv">
                    {
                        this.props.reviewsList.map((item) => {
                            return (
                                <ListGroup>
                                    <ListGroup.Item className="reviewBox" variant="danger"><h3>{item.email}</h3><br /><p>{item.text}</p></ListGroup.Item>
                                </ListGroup>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default withAuth0(Reviews)
