import React, { Component } from 'react';
import './Board.scss';
import CharCard from '../CharCard/CharCard';
import imagemocada from '../../assets/images/ei7tysx2.bmp';


interface Props {
}

interface state {

}


export default class board extends Component<Props, state> {
    state = {
        card1: {},
        card2: {},
        card3: {},
        card4: {},
        card5: {},
        card6: {},
        card7: {},
        card8: {},
    }

    componentDidMount () {}

    render() {

        return (
            <div className='board'>
                <div className='board__cardsArea'>
                    <CharCard image={imagemocada} name="Walter White" birthdate="05/10/1988" bio="Something useful" status="alive" />
                    <CharCard image={imagemocada} name="Walter White" birthdate="05/10/1988" bio="Something useful" status="alive" />
                    <CharCard image={imagemocada} name="Walter White" birthdate="05/10/1988" bio="Something useful" status="alive" />
                    <CharCard image={imagemocada} name="Walter White" birthdate="05/10/1988" bio="Something useful" status="alive" />
                    <CharCard image={imagemocada} name="Walter White" birthdate="05/10/1988" bio="Something useful" status="alive" />
                    <CharCard image={imagemocada} name="Walter White" birthdate="05/10/1988" bio="Something useful" status="alive" />
                    <CharCard image={imagemocada} name="Walter White" birthdate="05/10/1988" bio="Something useful" status="alive" />
                    <CharCard image={imagemocada} name="Walter White" birthdate="05/10/1988" bio="Something useful" status="alive" />
                </div>
                <div className='board__navArea'>
                    Page 1, 2, 3...
                </div>
            </div>
        )
    }
}