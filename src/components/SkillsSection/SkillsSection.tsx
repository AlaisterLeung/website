import { Badge, Box, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import {
  IconApi,
  IconApiApp,
  IconBrandCpp,
  IconBrandDocker,
  IconBrandGit,
  IconBrandGolang,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVscode,
  IconBrowser,
  IconCode,
  IconCoffee,
  IconDatabase,
  IconPalette,
  IconPipeline,
  IconServer2,
  IconSettings,
  IconSql,
  IconTerminal2,
  IconTools,
} from '@tabler/icons-react';
import classes from './SkillsSection.module.css';

type SkillColor = 'blue' | 'green' | 'orange' | 'purple';

type SkillGroup = {
  category: string;
  color: SkillColor;
  icon: typeof IconCode;
  skills: string[];
};

const promptColorClassMap: Record<SkillColor, string> = {
  blue: classes.promptCategoryBlue,
  green: classes.promptCategoryGreen,
  orange: classes.promptCategoryOrange,
  purple: classes.promptCategoryPurple,
};

const skills: SkillGroup[] = [
  {
    category: 'languages',
    color: 'blue',
    icon: IconCode,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Golang', 'Java', 'C/C++', 'SQL'],
  },
  {
    category: 'dev-tools',
    color: 'green',
    icon: IconTools,
    skills: ['Linux', 'Docker', 'Git', 'CI/CD', 'VS Code', 'IntelliJ IDEA'],
  },
  {
    category: 'frontend',
    color: 'purple',
    icon: IconBrowser,
    skills: ['React', 'Mantine UI', 'Shadcn UI', 'Tailwind CSS'],
  },
  {
    category: 'backend',
    color: 'orange',
    icon: IconServer2,
    skills: ['Node.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Express', 'REST APIs'],
  },
];

const skillIconMap: Record<string, typeof IconCode> = {
  TypeScript: IconBrandTypescript,
  JavaScript: IconBrandJavascript,
  Python: IconBrandPython,
  Golang: IconBrandGolang,
  Java: IconCoffee,
  'C/C++': IconBrandCpp,
  SQL: IconSql,
  Linux: IconTerminal2,
  Docker: IconBrandDocker,
  Git: IconBrandGit,
  'CI/CD': IconPipeline,
  'VS Code': IconBrandVscode,
  'IntelliJ IDEA': IconSettings,
  React: IconBrandReact,
  'Mantine UI': IconBrandMantine,
  'Shadcn UI': IconPalette,
  'Tailwind CSS': IconBrandTailwind,
  'Node.js': IconBrandNodejs,
  PostgreSQL: IconDatabase,
  MySQL: IconBrandMysql,
  MongoDB: IconBrandMongodb,
  Express: IconApiApp,
  'REST APIs': IconApi,
};

export function SkillsSection() {
  return (
    <Box component="section" id="skills" className={classes.section}>
      <Container size="lg">
        <Stack gap="lg" className={classes.stack}>
          <Title order={2} className={classes.title}>
            My Skills
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {skills.map((group) => (
              <Box
                key={group.category}
                p={{ base: 'md', md: 'lg' }}
                className={classes.categoryCard}
              >
                <Stack gap="sm">
                  <Text size="sm" className={classes.prompt}>
                    $ skills{' '}
                    <span
                      className={`${classes.promptCategoryGroup} ${promptColorClassMap[group.color]}`}
                    >
                      <span className={classes.promptCategory}>--{group.category}</span>
                      <group.icon className={classes.promptIcon} size={20} stroke={2} />
                    </span>
                  </Text>
                  <Group gap="xs">
                    {group.skills.map((skill) => {
                      const SkillIcon = skillIconMap[skill] ?? IconCode;

                      return (
                        <Badge key={skill} variant="outline" className={classes.skillBadge}>
                          <span className={classes.skillBadgeInner}>
                            <SkillIcon
                              aria-hidden
                              size={20}
                              stroke={2}
                              className={classes.skillIcon}
                            />
                            <span className={classes.skillLabel}>{skill}</span>
                          </span>
                        </Badge>
                      );
                    })}
                  </Group>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
