import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router';

const index = () => (
    <Grid style={{background:'#fff'}}>
        <Row className="show-grid">
            <Col xs={8} md={8} style={{fontSize:'1.2em',lineHeight:'2.5em',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}><span className="icon-jiudian iconfont" style={{color:THEME_COLOR}}></span>停车场、wifi、空调、电视、热水器...</Col>
            <Link to = '/intro'>
                <Col xs={4} md={8} style={{paddingLeft:0,textAlign:'center',fontSize:'1.1em',lineHeight:'2.8em',color:THEME_COLOR}}>酒店介绍>></Col>
            </Link>
        </Row>
    </Grid>
)

export default index
