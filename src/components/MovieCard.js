import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import ModalMovie from './ModalMovie'

export class MovieCard extends Component {
    constructor(props){
        super(props)
        this.state={
            show: false,
            original_title: '',
            poster_path: '',
            vote_average: '',
            overview: '',
            release_date: ''
        }
    }

    handleClose = () => this.setState({show:false});
    handleShow = (original_title,overview,release_date,vote_average,poster_path) => {
      
        this.setState({
           show:!this.state.show,
           original_title:original_title,
           poster_path: poster_path,
           vote_average: vote_average,
           overview: overview,
           release_date: release_date
       
       });
       console.log('title',this.state.original_title);
   };
    render() {
        return (
            <div>
                 <ModalMovie
                    handleClose={this.handleClose}
                    show={this.state.show}
                    original_title={this.state.original_title}
                    poster_path={this.state.poster_path}
                    vote_average={this.state.vote_average}
                    overview={this.state.overview}
                    release_date={this.state.release_date}

                />
                  <CardColumns CardColumns style={{ display: "flex", flexWrap: "wrap" }}>
                {this.props.searchMovie.map(item => {

                    return (<Card style={{ width: '18rem' }} >
                        <Card.Body onClick={()=>this.handleShow(item.original_title,item.overview,item.release_date,item.vote_average,item.poster_path)}>
                            <Card.Title>{item.original_title}</Card.Title>
                            <Card.Img variant="top" src={item.poster_path} />
                            <Card.Text>  {item.vote_average}   </Card.Text>
                            <Card.Text>  {item.release_date}   </Card.Text>
                           
                        </Card.Body> 
                        
                        </Card>);
                }
                )}

                {console.log( this.props.searchMovie)};
                </CardColumns>
               
            </div>
        )
    }
}

export default MovieCard
