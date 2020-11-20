import React, { PureComponent } from 'react';
import TabsInside from './tabsInside'
import {
    Button,
    Card,
    CardText,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Row,
    Container,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
const MyCard = (props) => {
    // control email in parent so user doesnt lose it in wrong form
    const [activeTab, setActiveTab] = React.useState('BUY');
    const [email, setEmail] = React.useState('');
    return (
        <div>
            <>
                <CardHeader tag="h6" className="p-0 border-bottom-0">

                    <Nav tabs fill>
                        <NavItem>
                            <NavLink active={activeTab == 'BUY'} onClick={() => setActiveTab('BUY')}>
                                <button className="btn btn-success btn-block">BUY</button>

                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink active={activeTab == 'Sell'} onClick={() => setActiveTab('Sell')}>

                                <button className="btn btn-secondary btn-block">SELL</button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>
                <CardBody>
                    
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="BUY">
                            <BUYContent email={email} setEmail={setEmail} />
                        </TabPane>
                        <TabPane tabId="Sell">
                            <SellContent email={email} setEmail={setEmail} />
                            
                        </TabPane>
                    </TabContent>
                    
                </CardBody>
            </>
        </div>
    );
};
const BUYContent = (props) => {
    return (
        <React.Fragment>
            <small>USD 0.000000001</small>
            <Form className="text-left">
                
                <Button className="btn btn-success btn-block" color="primary" block>Margin Buy BTC</Button>
            </Form>
        </React.Fragment>
    )
}

const SellContent = (props) => {
    return (
        <React.Fragment>
            <small>BTC 0.000000001</small>
            <Form className="text-left">
                <TabsInside/>
                <Button className="btn btn-danger btn-block" color="primary" block>Margin Sell BTC</Button>
            </Form>
        </React.Fragment>
    )
}
class RightCTabs extends PureComponent {

    render() {

        return (
            <Card>
                <CardHeader>Place Order</CardHeader>
                <MyCard />
            </Card>


        );
    }
}

export default (RightCTabs);













