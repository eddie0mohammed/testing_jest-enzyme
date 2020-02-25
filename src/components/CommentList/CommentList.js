
import React from 'react';

import {connect} from 'react-redux';
import * as actionCreators from '../../Redux/Actions/actionCreators';

class CommentList extends React.Component{
    


    renderComments = () => {
        if (this.props.comments){

        return this.props.comments.map((comment,i) => {
            return (
                <li key={i}>{comment}</li>
            )
        })
       }
    }

    render(){

        // console.log(this.props.comments);

        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
           </div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);