import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class index extends React.Component{
    componentDidMount(){
        let {intime,outtime} = this.props;
        $("#in-time").calendar({
            dateFormat: 'yyyy年mm月dd日',
            onChange: function (p, values, displayValues) {
               intime(displayValues[0],values[0])
            }
        });
        $("#out-time").calendar({
            dateFormat: 'yyyy年mm月dd日',
            onChange: function (p, values, displayValues) {
               outtime(displayValues[0],values[0])
            }
        });
    }
    render(){
        return(
            <div>
                <Grid style={{background:'#fff',padding:'0.5em 0',overflow:'hidden'}}>
                    <Row className="show-grid">
                        <Col xs={6} md={8} style={{padding:0}}><input placeholder="请选择入住时间" style={{textAlign:'center',border:'none'}} className="weui_input" id="in-time" type="text"/></Col>
                        <Col xs={6} md={8} style={{padding:0}}><input placeholder="请选择退房时间" style={{textAlign:'center',border:'none'}} className="weui_input" id="out-time" type="text"/></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default index
