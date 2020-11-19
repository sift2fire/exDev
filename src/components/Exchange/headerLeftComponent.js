import React, { PureComponent } from 'react';
import {
    Alert, Button,
    CardBody, CardHeader,
    Col, Row, Container,
    Card, CardText, CardTitle, Progress
} from 'reactstrap';
class HeaderLeftComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentWillMount = () => {
        console.log('HeaderLeftComponent will mount');
    }

    componentDidMount = () => {
        console.log('HeaderLeftComponent moujkhkjbkhvvnted');
    }

    render() {
        if (this.state.loading) {
            const pm = "Please Waite to load data from server..."
            return <CardHeader>{pm}</CardHeader>
        }
        return (

            <Card>
                <CardHeader>
                    Total Revenue{' '}
                    <small className="text-muted text-capitalize">This year</small>
                </CardHeader>
            </Card>

        );
    }
}

HeaderLeftComponent.propTypes = {
    // bla: PropTypes.string,
};

HeaderLeftComponent.defaultProps = {
    // bla: 'test',
};



export default (HeaderLeftComponent);
