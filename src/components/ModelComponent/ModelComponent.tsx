import React from 'react';

interface Props {
    name: string;
    birthdate: Date;
    bio: string;
    pic: File;
  }
  
  type OtherProps = {
    name: string;
    birthdate: Date;
    bio: string;
    pic: File;
  }

const OtherHeading: React.FC<OtherProps> = ({ name, birthdate, bio, pic }) =>
  <h1>My Website Heading</h1>

export default OtherHeading;