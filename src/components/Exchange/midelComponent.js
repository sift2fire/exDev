import React, { PureComponent } from 'react';
import { getList } from '../../demos/dashboardPage'
import Typography from 'components/Typography';
import DetailExChange from './detailExChange'
import {
    Alert,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,Button
} from 'reactstrap';
class MidelComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentWillMount = () => {
        console.log('midelComponent will mount');
    }

    componentDidMount = () => {
        console.log('midelComponent moujkhkjbkhvvnted');
    }

    render() {
        if (this.state.loading) {
            const pm = "Please Waite to load data from server..."
            return <CardHeader>{pm}</CardHeader>
        }
        return (
            <>
                <Row>
                    <Col>
                        <CardHeader>
                            fgsdfsdfdhjvhjb
                        </CardHeader>
                    </Col>
                </Row>
            </>
        );
    }
}

MidelComponent.propTypes = {
    // bla: PropTypes.string,
};

MidelComponent.defaultProps = {
    // bla: 'test',
};



export default (MidelComponent);
