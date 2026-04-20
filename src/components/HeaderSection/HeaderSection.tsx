import { Anchor, Badge, Box, Container, Group, Stack, Text, Title } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronRight,
  IconMail,
} from '@tabler/icons-react';
import classes from './HeaderSection.module.css';

const roles = [
  { label: 'Software Engineer', badgeClass: classes.roleBadgeBlue },
  { label: 'Full Stack Developer', badgeClass: classes.roleBadgeGreen },
  { label: 'Linux Enthusiast', badgeClass: classes.roleBadgeOrange },
];

export function HeaderSection() {
  return (
    <Box component="header" className={classes.header}>
      <Container size="lg" className={classes.container}>
        <Stack gap="lg" className={classes.stack}>
          <Group justify="space-between" wrap="wrap" gap="sm" className={classes.windowBar}>
            <Group gap="xs" className={classes.dots}>
              <Box className={`${classes.dot} ${classes.dotRed}`} />
              <Box className={`${classes.dot} ${classes.dotAmber}`} />
              <Box className={`${classes.dot} ${classes.dotGreen}`} />
            </Group>
            <Anchor
              href="#skills"
              className={classes.menuLink}
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById('skills')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <IconChevronRight aria-hidden size={16} stroke={4} className={classes.menuIcon} />
              View My Skills
            </Anchor>
          </Group>

          <Box p={{ base: 'lg', sm: 'xl', md: 36 }} className={classes.panel}>
            <Stack gap="lg" className={classes.panelContent}>
              <Text size="sm" className={classes.prompt}>
                $ whoami
              </Text>
              <Stack gap="md" className={classes.commandOutput}>
                <Title order={1} className={classes.name}>
                  <span className={classes.nameWord}>Alaister</span>
                  <span className={classes.nameWord}>LJ Leung</span>
                </Title>

                <Group gap="sm" wrap="wrap">
                  {roles.map((role) => (
                    <Badge
                      key={role.label}
                      variant="outline"
                      size="lg"
                      className={`${classes.roleBadge} ${role.badgeClass}`}
                    >
                      {role.label}
                    </Badge>
                  ))}
                </Group>
              </Stack>

              <Text size="sm" mt={{ base: 'lg', sm: 'xl' }} className={classes.prompt}>
                $ education
              </Text>
              <Text className={`${classes.orgName} ${classes.commandOutput}`}>
                HKUST Computer Science '28
              </Text>

              <Text size="sm" mt={{ base: 'lg', sm: 'xl' }} className={classes.prompt}>
                $ email
              </Text>
              <Anchor
                href="mailto:me@ljleung.dev"
                className={`${classes.commandOutput} ${classes.linkBase} ${classes.emailLink}`}
              >
                <IconMail aria-hidden size={20} stroke={2} className={classes.emailIcon} />
                <span>me@ljleung.dev</span>
              </Anchor>

              <Text size="sm" mt={{ base: 'lg', sm: 'xl' }} className={classes.prompt}>
                $ links
              </Text>
              <Group className={`${classes.commandOutput} ${classes.linksRow}`}>
                <Anchor
                  href="https://github.com/AlaisterLeung"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`${classes.linkBase} ${classes.socialLink}`}
                >
                  <IconBrandGithub
                    aria-hidden
                    size={20}
                    stroke={2}
                    className={classes.socialIcon}
                  />
                  <span>GitHub</span>
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/alaister-lj-leung-5427a6404/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`${classes.linkBase} ${classes.socialLink}`}
                >
                  <IconBrandLinkedin
                    aria-hidden
                    size={20}
                    stroke={2}
                    className={classes.socialIcon}
                  />
                  <span>LinkedIn</span>
                </Anchor>
              </Group>
            </Stack>
          </Box>

          <Text className={classes.tagline}>
            <IconChevronRight aria-hidden size={16} stroke={4} className={classes.taglineIcon} />
            <span className={classes.taglineText}>
              Strive to learn, build, and grow every day.
              <span aria-hidden className={classes.cursor} />
            </span>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
