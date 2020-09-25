import React, { Component } from 'react'
import { Button, Label, Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)  
const minLength = (len) => (val) => (val) && (val.length >= len)
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal()
        this.props.addComment(this.props.dishId, values.fullName, values.rating, values.comment)
    }

    render () {
        return(
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select name="rating" model=".rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="clientName" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <
                                        Control.text 
                                        name="fullName" 
                                        model=".fullName"
                                        className="form-control" 
                                        validators= {{
                                            required,
                                            maxLength: maxLength(15),
                                            minLength: minLength(2)
                                        }}
                                    />
                                </Col>
                                <Errors 
                                    className="text-danger"
                                    model=".fullName"
                                    show="touched"
                                    messages={{
                                        required: "Required",
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 character',
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <
                                        Control.textarea 
                                        model=".comment" 
                                        name="comment" 
                                        className="form-control"
                                        rows="4" 
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody> 
                </Modal>
                <Button outline className="secondary" onClick={this.toggleModal}>Submit Comment</Button>
            </div>
        )
    }
} 

export default CommentForm