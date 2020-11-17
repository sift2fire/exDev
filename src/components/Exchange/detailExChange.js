import React, { PureComponent } from 'react';
import { getItem } from '../../demos/dashboardPage'
import {
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

class DetailExChange extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            loading: true
        };
    }
    componentDidMount = () => {
        console.log('LeftComponenet mounted');
        getItem(this.props.id)
            .then(data => {
                this.setState({
                    name: data.title,
                    description: data.description,
                    loading : false
                })
            })
    }
    render() {
        if(this.state.loading){
            return "please wait..."
        }
        return (
            <>
                <Col md={12} sm={6} xs={12} className="mb-3">
                    <Card>
                        <CardBody>
                            <CardTitle>{this.state.name}</CardTitle>
                            <CardText>
                                {this.state.description}
                            </CardText>
                        </CardBody>
                        <ListGroup flush>
                            <ListGroupItem>{this.state.name}</ListGroupItem>
                            <ListGroupItem>{this.state.description}</ListGroupItem>
                        </ListGroup>
                        <CardBody>
                        </CardBody>
                    </Card>
                    
                </Col>
                <Button onClick={this.props.onBackClick} color="warning">Back Button</Button>

            </>

        )

    }
}


export default DetailExChange
