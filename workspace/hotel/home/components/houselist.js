import React from 'react';
import {Grid,Row,Col,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import {Link} from 'react-router';

const index = ({list,orderRoom,livedays,intime,outtime}) => (
    <Grid style={{background:'#fff',paddingBottom:'3em'}}>
        {list.map(item => (
            <Row key={item.id} className="show-grid" style={{borderTop:'1px solid #eee',padding:'0.5rem 0'}}>
                <Col xs={3} md={8} style={{paddingRight:'10px'}}><img src={item.logourl} style={{height:'55px'}}/></Col>
                <Col xs={6} md={8} style={{padding:0}}>
                    <ListGroup style={{margin:0}}>
                        <ListGroupItem style={{padding:0,border:'none'}}>{item.name}</ListGroupItem>
                        <ListGroupItem style={{padding:0,border:'none',color:'#cc0000'}}>{item.price}</ListGroupItem>
                        <ListGroupItem style={{padding:0,border:'none',color:'#ccc'}}>{item.des}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col xs={3} md={8} style={{paddingTop:'0.7em'}}>
                    <Button bsStyle="info" style={{backgroundColor:'#33bbaf'}} onClick={() => {orderRoom(livedays,item.id,item.price,intime,outtime)}}>预约</Button>
                </Col>
            </Row>
        ))}
    </Grid>
)

export default index
