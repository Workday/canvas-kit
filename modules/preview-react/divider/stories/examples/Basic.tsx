import React from 'react';

import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const sectionStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x4,
  maxWidth: '40rem',
});

export const Basic = () => {
  const lastIndex = maintainerList.length - 1;
  return (
    <section className={sectionStyles}>
      {maintainerList.map((maintainerData, index) => (
        <>
          <ProfileCard {...maintainerData} />
          {index !== lastIndex && <Divider space={system.space.x1} />}
        </>
      ))}
    </section>
  );
};

const maintainerList = [
  {
    id: '44883293',
    name: 'Josh Bagwell',
    bio: 'Software Development Engineer',
  },
  {
    id: '338257',
    name: 'Nicholas Boll',
    bio: 'Principal Software Development Engineer',
  },
  {
    id: '7966550',
    name: 'Manuel Carrera',
    bio: 'Sr. Software Development Engineer',
  },
  {
    id: '146020',
    name: 'James Fan',
    bio: 'Sr. Software Development Engineer',
  },
  {
    id: '48605821',
    name: 'Raisa Primerova',
    bio: 'Software Development Engineer',
  },
  {
    id: '4818182',
    name: 'Alan Smith',
    bio: 'Principal Software Development Engineer',
  },
];

const profileCardStyles = createStyles({
  display: 'grid',
  gridGap: '0.5rem',
  gridTemplateColumns: '5rem 1fr',
  gridTemplateRows: '1fr 1fr',
});

const profileCardAvatarStyles = createStyles({
  gridColumn: '1',
  gridRow: '1 / 3',
});

const profileCardHeadingStyles = createStyles({
  ...system.type.body.large,
  fontWeight: system.fontWeight.bold,
  gridColumn: '2/3',
  gridRow: '1',
  margin: 0,
});

const profileCardBodyStyles = createStyles({
  ...system.type.body.small,
  gridColumn: '2',
  gridRow: '2',
  margin: 0,
});

interface ProfileCardProps {
  id: string;
  name: string;
  bio: string;
}

const ProfileCard = ({id, name, bio}: ProfileCardProps) => (
  <div className={profileCardStyles}>
    <Avatar
      size="extraLarge"
      url={`https://avatars.githubusercontent.com/u/${id}?v=4`}
      name={`${name}'s avatar`}
      className={profileCardAvatarStyles}
    />
    <h3 className={profileCardHeadingStyles}>{name}</h3>
    <p className={profileCardBodyStyles}>{bio}</p>
  </div>
);
