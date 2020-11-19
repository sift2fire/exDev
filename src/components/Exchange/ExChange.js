import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ExChange.styles';
import LeftComponent from './leftComponent'
import { Col, Row, Container, CardHeader, } from 'reactstrap';
import RightComponent from './rightComponent';
import MidelComponent from './midelComponent';
import HeaderLeftComponent from './headerLeftComponent';

class ExChange extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  componentWillMount = () => {
    console.log('ExChange will mount');
  }

  componentDidMount = () => {
    console.log('ExChange mounted');

  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ExChange will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ExChange will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('ExChange did update');
  }

  componentWillUnmount = () => {
    console.log('ExChange will unmount');
  }

  render() {
    if (this.state.loading) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      // <Page title="ExChange" breadcrumbs={[{ name: 'ExChange', active: true }]} >

      <Container className="themed-container" fluid={true}>
        <Row xs="1" sm="2" md="4">
          <Col lg="9" md="12" sm="12" xs="12" className="">
            <Row xs="1" sm="2" md="4">
              <Col md="12">
                <HeaderLeftComponent />
              </Col>
              <Col lg="9" xs="12"><LeftComponent /></Col>
              <Col><MidelComponent /></Col>
            </Row>
          </Col>
          <Col lg="3" md="12" sm="12" xs="12" className="">
            <RightComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}

ExChange.propTypes = {
  // bla: PropTypes.string,
};

ExChange.defaultProps = {
  // bla: 'test',
};



export default (ExChange);
