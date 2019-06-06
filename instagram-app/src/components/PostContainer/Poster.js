import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'


const PosterDiv = styled.div`
    display:flex;
    align-items: center;
    margin: 1rem;
`

const PosterImage = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 25px;
`

export const PosterName = styled.div`
    font-size: 1.5rem;
    font-weight: 600
    margin-left: 1rem;
`
export const PosterTime = styled.div`
    font-size: 1.3rem;
    font-weight:200;
    margin-left: 2rem;
`
const Poster = props => {
    return (
        <PosterDiv>
            <PosterImage alt = "poster image" src = {props.posterImage} />
            <PosterName>
                {props.username}
            </PosterName>
            <PosterTime>{moment(props.timestamp, "MMMM-Do-YYYY").fromNow()}</PosterTime> 
        </PosterDiv>
    )
}

Poster.propTypes = {
    posterImage: PropTypes.string,
    username: PropTypes.string,
}

export default Poster
