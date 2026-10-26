import {Divider} from '@workday/canvas-kit-preview-react/divider';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const sectionStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.md,
  maxWidth: '40rem',
});

export const Basic = () => {
  const lastIndex = maintainerList.length - 1;
  return (
    <section className={sectionStyles}>
      {maintainerList.map((maintainerData, index) => (
        <>
          <ProfileCard {...maintainerData} />
          {index !== lastIndex && <Divider space={system.gap.xs} />}
        </>
      ))}
    </section>
  );
};

const maintainerList = [
  {
    id: '44883293',
    name: 'Josh Bagwell',
    bio: 'Master of Cocktails and Fast Cars',
  },
  {
    id: '338257',
    name: 'Nicholas Boll',
    bio: 'Principal Potato Engineer',
  },
  {
    id: '7966550',
    name: 'Manuel Carrera',
    bio: 'Sr. Rock Climber and Artist',
  },
  {
    id: '146020',
    name: 'James Fan',
    bio: 'Sr. Television Consultant',
  },
  {
    id: '48605821',
    name: 'Raisa Primerova',
    bio: 'Principal Borscht Connoisseur',
  },
  {
    id: '4818182',
    name: 'Alan Smith',
    bio: 'Principal Pizza Tosser',
  },
];

const profileCardStyles = createStyles({
  display: 'flex',
  gap: '0.5rem',
  flexDirection: 'row',
});

const profileCardAvatarStyles = createStyles({
  gridColumn: '1',
  gridRow: '1 / 3',
});

const profileCardHeadingStyles = createStyles({
  ...system.type.body.lg,
  fontWeight: system.fontWeight.bold,
  gridColumn: '2/3',
  gridRow: '1',
  margin: 0,
});

const profileCardBodyStyles = createStyles({
  ...system.type.body.sm,
  gridColumn: '2',
  gridRow: '2',
  margin: 0,
});

const profileCardContentStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.xs,
});

interface ProfileCardProps {
  id: string;
  name: string;
  bio: string;
}

const ProfileCard = ({id, name, bio}: ProfileCardProps) => (
  <div className={profileCardStyles}>
    <Avatar
      size="large"
      url={`https://avatars.githubusercontent.com/u/${id}?v=4`}
      name={`${name}'s avatar`}
      className={profileCardAvatarStyles}
    />
    <div className={profileCardContentStyles}>
      <h3 className={profileCardHeadingStyles}>{name}</h3>
      <p className={profileCardBodyStyles}>{bio}</p>
    </div>
  </div>
);
