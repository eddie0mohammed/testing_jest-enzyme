import React from 'react';

import {connect } from 'react-redux';
import * as actionCreators from '../../Redux/Actions/actionCreators';


class CommentBox extends React.Component{

    state = {
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ''
        })
    }

    render(){

        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>

                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className="fetchBtn" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveComment: (comment) => dispatch(actionCreators.saveComment(comment)),
        fetchComments: () => dispatch(actionCreators.fetchComment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);