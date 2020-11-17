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
class LeftComponenet extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
            selectedId: ''
        };
    }

    componentWillMount = () => {
        console.log('LeftComponenet will mount');
    }

    componentDidMount  ()  {
        console.log('LeftComponenet moujkhkjbkhvvnted');
        getList().then(data => {
            this.setState({
                items: data,
                loading:false
            })
        })
    }

    // componentWillReceiveProps = (nextProps) => {
    //     console.log('LeftComponenet will receive props', nextProps);
    // }

    // componentWillUpdate = (nextProps, nextState) => {
    //     console.log('LeftComponenet will update', nextProps, nextState);
    // }


    // componentDidUpdate = () => {
    //     console.log('LeftComponenet did update');
    // }

    // componentWillUnmount = () => {
    //     console.log('LeftComponenet will unmount');
    // }
    handleItemClick = (id) => {
        this.setState({
            selectedId: id
        })
    }
    onBackClick = () => {
        console.log('detaile on backed click ');
        this.setState({
            selectedId: null
        })
    }
    render() {
        const { loading, selectedId, items } = this.state
        if (this.state.loading) {
            const pm = "Please Waite to load data from server..."
            return <CardHeader>{pm}</CardHeader>
        }
        return (
            <>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>Additional Content</CardHeader>
                            <CardBody>
                                <Alert color="success">
                                    <Typography type="h4" className="alert-heading"> Well done!</Typography>
                                    <Typography>
                                        {selectedId && <DetailExChange id={selectedId} onBackClick={this.onBackClick}/>}
                                        {!selectedId &&
                                            <ul>
                                                {items.map(item =>
                                                    <li key={item.id} onClick={()=>this.handleItemClick(item.id)} > {item.name} </li>
                                                )}
                                            </ul>
                                        }
                                    </Typography>
                                    <hr />
                                    <Typography className="mb-0">

                                    </Typography>
                                </Alert>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

LeftComponenet.propTypes = {
    // bla: PropTypes.string,
};

LeftComponenet.defaultProps = {
    // bla: 'test',
};



export default (LeftComponenet);
