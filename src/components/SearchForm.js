import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './SearchForm.css';
import "../font-awesome-4.7.0/css/font-awesome.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// /home/anas/301ASAC/ciphers-frontend/src/font-awesome-4.7.0/css/font-awesome.css

export class SearchForm extends Component {
    render() {
        return (
            <div>
                <Container className="searchContainer">
                    <Form className="searchForm" onSubmit={this.props.MovieSearchByName} >
                        <Row>
                            <Col sm={10}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control onChange={this.props.getMovieName} type="text" placeholder="Search for a movie" />
                                </Form.Group>
                            </Col>
                            <Col sm={2}>
                                <Button variant="primary" type="submit" className="searchButton">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </Button>
                            </Col>
                        </Row>


                    </Form>
                </Container>
            </div>
        )
    }
}

export default SearchForm
