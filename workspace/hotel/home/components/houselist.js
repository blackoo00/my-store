import React from 'react';
import {Grid,Row,Col,ListGroup,ListGroupItem,Button} from 'react-bootstrap';

const index = ({list}) => (
    <Grid style={{background:'#fff'}}>
        {list.map(item => (
            <Row key={item.id} className="show-grid" style={{borderTop:'1px solid #eee',padding:'0.5rem 0'}}>
                <Col xs={3} md={8} style={{paddingRight:'10px'}}><img src={item.logourl} style={{height:'55px'}}/></Col>
                <Col xs={6} md={8} style={{padding:0}}>
                    <ListGroup style={{marginBotton:0}}>
                        <ListGroupItem style={{padding:0,border:'none'}}>{item.name}</ListGroupItem>
                        <ListGroupItem style={{padding:0,border:'none',color:'#cc0000'}}>{item.price}</ListGroupItem>
                        <ListGroupItem style={{padding:0,border:'none',color:'#ccc'}}>{item.des}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col xs={3} md={8} style={{paddingTop:'1.2rem'}}>
                    <Button bsStyle="info" style={{backgroundColor:'#33bbaf'}}>预约</Button>
                </Col>
            </Row>
        ))}
    </Grid>
)

export default index
