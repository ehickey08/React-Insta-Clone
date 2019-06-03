import React from 'react'
import PropTypes from 'prop-types'
import './PostContainer.scss'

const Poster = props => {
    return (
        <div className = 'poster'>
            <div className = 'poster-image'>
                <img alt = "poster image" src = {props.posterImage} />
            </div>
            <div className = 'poster-name'>
                {props.username}
            </div>
        </div>
    )
}

Poster.propTypes = {
    posterImage: PropTypes.string,
    username: PropTypes.string,
}

export default Poster
