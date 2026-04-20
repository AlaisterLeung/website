import { Anchor, Box, Container, Text } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import classes from './FooterSection.module.css';

const REPO_URL = 'https://github.com/AlaisterLeung/website';

export function FooterSection() {
  return (
    <Box component="footer" className={classes.footer}>
      <Container size="lg">
        <Text className={classes.line}>
          Built with <IconHeartFilled aria-hidden size={14} className={classes.heartIcon} /> using
          Mantine UI.
          <Anchor
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.sourceLink}
          >
            View source code
          </Anchor>
        </Text>
      </Container>
    </Box>
  );
}
