import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const TabsInside = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Tab2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Tab3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h5>Tab 1 Contents</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
              <h5>Tab 2 Contents</h5>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
        <Row>
            <Col sm="12">
              <h5>Tab 3 Contents</h5>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default TabsInside;
