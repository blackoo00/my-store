import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class index extends React.Component{
    componentDidMount(){
        $("#date3").calendar({
            value: ['2016-12-12'],
            dateFormat: 'yyyy年mm月dd日'
        });
    }
    render(){
        return(
            <div>
                <Grid style={{background:'#fff'}}>
                    <Row className="show-grid">
                        <Col xs={6} md={8} style={{padding:0}}><input placeholder="请选择入住时间" style={{textAlign:'center'}} className="weui_input" id="date3" type="text"/></Col>
                        <Col xs={6} md={8} style={{padding:0}}><input placeholder="请选择退房时间" style={{textAlign:'center'}} className="weui_input" id="date3" type="text"/></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default index
