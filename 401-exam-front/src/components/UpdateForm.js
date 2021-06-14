import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdateForm extends Component {
    render() {
        return (
            <>
                <Form onSubmit={(e)=>this.props.updateFav(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.props.name} onChange={this.props.nameHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" value={this.props.img} onChange={this.props.imgHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Level</Form.Label>
                        <Form.Control type="text" value={this.props.level} onChange={this.props.levelHandler}/>
                    </Form.Group>
                
                    <Button variant="primary" type="submit" onClick={()=>this.props.updateFav(this.props.index)}>
                        Update
                    </Button>
                </Form>
            </>
        )
    }
}

export default UpdateForm;
