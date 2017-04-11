import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

const index = ({info}) => (
    <Grid style={{background:'#fff'}}>
        <Row className="show-grid">
            <Col xs={10} md={8} style={{fontSize:'1.2em',lineHeight:'2.5em'}}>  {info.name}</Col>
            <a href={"tel:" + info.tel}>
                <Col xs={2} md={8} className="icon-msnui-caller iconfont" style={{textAlign:'center',fontSize:'2.1em',lineHeight:'1.3em'}}></Col>
            </a>
        </Row>
    </Grid>
)

export default index
