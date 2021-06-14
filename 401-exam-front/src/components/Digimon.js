import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Digimon extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' ,display:'inline-block' }}>
                    <Card.Img variant="top" src={this.props.digimon.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimon.name}</Card.Title>
                        <Card.Text>
                           {this.props.digimon.level}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.props.addToFav(this.props.digimon)}>Add To Favorite</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Digimon
