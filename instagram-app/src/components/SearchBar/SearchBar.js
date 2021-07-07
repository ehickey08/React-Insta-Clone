import React from 'react'
import './SearchBar.scss'
import {Icon, Input} from 'antd';
import styled from 'styled-components'

const SearchDiv = styled.div`
    border-bottom: 3px solid lightgray;
    height: 8rem;
    display: flex;
    justify-content: space-between;
`
const LogoDiv = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    padding: 0 2rem;
    align-items: center;
`
const PipeSpan = styled.span`
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 1rem;
`

const InstaLogo = styled.img`
    width: 65%;
`

const InputDiv = styled.div`
    margin-top: 2.5rem;
    width: 40%;
`

const IconContainer = styled.div`
    display: flex;
    width: 20%;
    margin-top: 3rem;
`
const SearchBar = props => {
    const Search = Input.Search;
    return (
        <SearchDiv>
            <LogoDiv>
                <Icon type="instagram" className = 'icon' />
                <PipeSpan>|</PipeSpan>
                <InstaLogo src="./assets/1280px-Instagram_logo.svg.png"/>
            </LogoDiv>
            <InputDiv>
                <Search
                    placeholder="Search"
                    value={props.searchTerm}
                    onChange = {props.search}
                    style={{ width: 300 }}
                />
            </InputDiv>
             <IconContainer>
                <Icon type="compass" className = 'icon-small' />
                <Icon type="heart" className = 'icon-small' />
                <Icon type="user" className = 'icon-small'/>
            </IconContainer>
        </SearchDiv>
    )
}

SearchBar.propTypes = {

}

export default SearchBar