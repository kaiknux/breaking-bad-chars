import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Char } from '../../store/redux/characters/types';
import { ApplicationState } from '../../store';

import * as CharactersActions from '../../store/redux/characters/actions';

import './Board.scss';
import CharCard from '../CharCard/CharCard';

interface StateProps {
    charlist: Char[]
}

interface DispatchProps {
    loadRequest(): void
}


type Props = StateProps & DispatchProps


class Board extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { charlist } = this.props;

    return (
      <div className="board">
        <div className="board__cardsArea">
          {/* {charlist.map(character => (
            <CharCard
              name={character.name}
              id={character.id}
              status={character.status}
              birthdate={character.birthdate}
              bio={character.bio}
              image={character.image}
            />
          ))} */}
        </div>
        <div className="board__navArea">
                    Page 1, 2, 3...
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  charlist: state.characters.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CharactersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
