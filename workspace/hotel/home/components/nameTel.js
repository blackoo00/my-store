import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

const index = () => (
    <Grid style={{background:'#fff'}}>
        <Row className="show-grid">
          <Col xs={10} md={8} style={{fontSize:'1.2em',lineHeight:'2.5em'}}>酒店名</Col>
          <Col xs={2} md={8} className="icon-msnui-caller iconfont" style={{textAlign:'center',fontSize:'2.1em',lineHeight:'1.3em'}}></Col>
        </Row>
    </Grid>
)

export default index
