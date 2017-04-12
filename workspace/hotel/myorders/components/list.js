import React from 'react';
import {Grid,Row,Col,ListGroup,ListGroupItem,Button} from 'react-bootstrap';

const index = ({list,lived}) => (
    <Grid style={{padding:'2.5em 0 3em 0',overflow:'hidden'}}>
        {list.map(item => (
            <Row key={item.id} className="show-grid" style={{background:'#fff',borderTop:'1px solid #eee',padding:'0.5rem 8px'}}>
                <Col xs={3} md={8} style={{paddingRight:'10px'}}><img src={item.logourl}/></Col>
                <Col xs={6} md={8} style={{padding:0}}>
                    <ListGroup style={{margin:0,fontSize:'15px'}}>
                        <ListGroupItem style={{padding:0,border:'none'}}>{item.name}</ListGroupItem>
                        <ListGroupItem style={{padding:0,border:'none',color:'#cc0000'}}>{item.price}</ListGroupItem>
                        <ListGroupItem style={{padding:0,border:'none',color:'#ccc'}}>{item.des}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col xs={3} md={8} style={{paddingTop:'0.7em',fontSize:'15px'}}>
                    {item.lived == 0 ? <span>未付款</span> : ''}
                    {item.lived == 1 ? <span>待入住</span> : ''}
                    {item.lived == 2 ? <span>已入住</span> : ''}
                    {item.lived == 3 ? <span>已退房</span> : ''}
                </Col>
            </Row>
        ))}
    </Grid>
)

export default index
