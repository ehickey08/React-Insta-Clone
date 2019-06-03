import React from 'react'
import PropTypes from 'prop-types'
import './CommentSection.scss';

const CommentInput = props => {
    return (
        <form>
            <input type = 'text' placeholder = 'Add comment...' />
        </form>
    )
}

CommentInput.propTypes = {

}

export default CommentInput
