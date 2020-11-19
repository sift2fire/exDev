import React, { PureComponent } from 'react';
import {
    Alert, Button,
    CardBody, CardHeader,
    Col, Row, Container,
    Card, CardText, CardTitle, Progress
} from 'reactstrap';
class RightComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentWillMount = () => {
        console.log('LeftComponenet will mount');
    }

    componentDidMount = () => {
        console.log('LeftComponenet moujkhkjbkhvvnted');
    }

    render() {
        if (this.state.loading) {
            const pm = "Please Waite to load data from server..."
            return <CardHeader>{pm}</CardHeader>
        }
        return (

            <Card body>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
            </Card>
            
        );
    }
}

RightComponent.propTypes = {
    // bla: PropTypes.string,
};

RightComponent.defaultProps = {
    // bla: 'test',
};



export default (RightComponent);
