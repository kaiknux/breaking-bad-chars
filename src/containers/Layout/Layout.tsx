import React, { Component } from 'react';
import './Layout.scss'
import Header from '../Header/Header'
import Board from '../Board/Board';

interface Repository {
}

interface Props {
}

interface state {

}


export default class layout extends Component<Props, state> {


    componentDidMount () {}

    render() {

        return (
            <div className='layout'>
                <div className='layout__headerContainer'>
                    <Header />
                </div>
                <div className='layout__contentContainer'>
                    <Board />
                </div> 
            </div>
        )
    }
}

//estrutura de classe padrão