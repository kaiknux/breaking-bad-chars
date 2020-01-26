import React from 'react';

interface Props {
    name: string;
    birthdate: Date;
    bio: string;
    pic: string;
  }
  


const OtherHeading: React.FC<Props> = ({ name, birthdate, bio, pic }) =>
  <h1>My Website Heading</h1>

export default OtherHeading;