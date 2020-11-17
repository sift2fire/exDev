import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ExChange.styles';
import LeftComponent from './leftComponent'
import { Col, Row } from 'reactstrap';
import Page from '../../components/Page';

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

      <Page >
        <Row>
          <Col xl={8} lg={6} md={12} sm={6}   className="">
            <LeftComponent />
          </Col>
          <Col  xl={2} lg={3} md={6} sm={3} className="bg-success">
          2

          </Col>
          <Col xl={2} lg={3} md={6} sm={3} className="bg-primary">
          3

          </Col>
        </Row>
      </Page>
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
