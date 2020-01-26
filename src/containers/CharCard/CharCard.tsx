import React from 'react';
// import Logo from '../../components/UI/Logo/Logo';
import './CharCard.scss';

interface Char {
  id: string,
  status: string,
  name: string,
  birthdate: string,
  bio: string,
  image: string,
}


const CharCard: React.FC<Char> = ({
  id, status, name, birthdate, bio, image,
}) => (
  <div className="cardContainer">
    <div className="cardContainer__flag">
      {status}
    </div>
    <div className="cardContainer__name">
      {name}
    </div>
    <div className="cardContainer__birthdate">
      {birthdate}
    </div>
    <div className="cardContainer__bio">
      {bio}
    </div>

  </div>
);

export default CharCard;
