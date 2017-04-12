import React from 'react';
import Feedback from '../components/feedback';
import {connect} from 'react-redux';
import * as actions from '../actions/';

const feedback = ({...rest}) => (
    <Feedback
        editFeedback = {rest.editFeedback}
        feedback = {rest.feedback}
        saveFeedback = {() => {rest.saveFeedback(rest.feedback)}}
    />
)

const mapStateToProps = state => ({
    feedback:state.my.feedback
})

const mapDispatchToProps = dispatch => ({
    editFeedback:(info) => {
        dispatch(actions.editFeedback(info))
    },
    saveFeedback:(info) => {
        dispatch(actions.feedback(info))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(feedback);
