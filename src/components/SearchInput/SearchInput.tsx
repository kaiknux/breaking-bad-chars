import React, { Component } from 'react';
import './SearchInput.scss'

interface Repository {
}

interface Props {
}

interface state {

}


export default class searchInput extends Component<Props, state> {
    state = {

    }

    componentDidMount () {}

    render() {

        return (
            <div className='searchInput'>
                <input className="searchInput__input" type="text" placeholder="estilizar depois" />
            </div>
        )
    }
}

