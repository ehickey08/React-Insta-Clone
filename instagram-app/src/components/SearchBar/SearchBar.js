import React from 'react'
import PropTypes from 'prop-types'
import './SearchBar.scss'
import {Icon, Input} from 'antd';

const SearchBar = props => {
    const Search = Input.Search;
    return (
        <div className = 'searchbar-container'>
            <div className ='logo-container'>
                <Icon type="instagram" className = 'icon' />
                <span className = 'divider'>|</span>
                <img src="./assets/1280px-Instagram_logo.svg.png" className = 'logo-text' />
            </div>
            <div classname="search-input">
                <Search
                    placeholder="Search"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </div>
             <div className ='icon-container'>
                <Icon type="compass" className = 'icon-small' />
                <Icon type="heart" className = 'icon-small' />
                <Icon type="user" className = 'icon-small'/>
            </div>
        </div>
    )
}

SearchBar.propTypes = {

}

export default SearchBar