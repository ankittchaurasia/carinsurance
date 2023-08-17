import { CarCrash, BrandGithub, BrandLinkedin } from 'tabler-icons-react';
import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, rem, Title, ActionIcon, useMantineColorScheme, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Sun, MoonStars } from 'tabler-icons-react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  title:{
    [theme.fn.smallerThan('sm')]: {
      fontSize: '.8rem',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

function DarkTheme(){
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <Sun size="1.1rem" /> : <MoonStars size="1.1rem" />}
    </ActionIcon>
  );
}

export default function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        router.push(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={30} className={classes.root}>
      <Container className={classes.header}>
      <div style={{display:'flex', placeItems:'center'}}>
        <ActionIcon size="xl">
            <CarCrash size="2rem" strokeWidth={1.5} />
        </ActionIcon>

        <Title size={17} className={classes.title}> Car Insurance Premium Calculator</Title>
        </div>
        <Group spacing={0} position="right" noWrap>
          <a href='https://github.com/ankittchaurasia/carinsurance' target='_blank'>
            <ActionIcon size="lg">
              <BrandGithub size="1.1rem" strokeWidth={1.5} />
            </ActionIcon>
          </a>
          <DarkTheme />
        </Group>

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );

}