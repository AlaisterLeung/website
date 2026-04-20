import '@mantine/core/styles.css';
import { type CSSVariablesResolver, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

const cssVariablesResolver: CSSVariablesResolver = (currentTheme) => ({
  variables: {
    '--portfolio-color-bg-base': currentTheme.other.bgBase,
    '--portfolio-color-bg-elevated': currentTheme.other.bgElevated,
    '--portfolio-color-divider': currentTheme.other.divider,
    '--portfolio-color-panel-border': currentTheme.other.panelBorder,
    '--portfolio-color-badge-border': currentTheme.other.badgeBorder,
    '--portfolio-color-panel-bg': currentTheme.other.panelBg,
    '--portfolio-color-panel-gradient-start': currentTheme.other.panelGradientStart,
    '--portfolio-color-panel-gradient-start-strong': currentTheme.other.panelGradientStartStrong,
    '--portfolio-color-panel-gradient-end': currentTheme.other.panelGradientEnd,
    '--portfolio-color-shadow-strong': currentTheme.other.shadowStrong,
    '--portfolio-color-glow-blue': currentTheme.other.glowBlue,
    '--portfolio-color-glow-mint': currentTheme.other.glowMint,
    '--portfolio-color-dot-red': currentTheme.other.dotRed,
    '--portfolio-color-dot-amber': currentTheme.other.dotAmber,
    '--portfolio-color-dot-green': currentTheme.other.dotGreen,
    '--portfolio-color-fg-base': currentTheme.other.fgBase,
    '--portfolio-color-fg-strong': currentTheme.other.fgStrong,
    '--portfolio-color-fg-emphasis': currentTheme.other.fgEmphasis,
    '--portfolio-color-fg-muted': currentTheme.other.fgMuted,
    '--portfolio-color-fg-subtle': currentTheme.other.fgSubtle,
    '--portfolio-color-fg-soft': currentTheme.other.fgSoft,
    '--portfolio-color-fg-soft-hover': currentTheme.other.fgSoftHover,
    '--portfolio-color-fg-mid': currentTheme.other.fgMid,
    '--portfolio-color-fg-bright': currentTheme.other.fgBright,
    '--portfolio-color-fg-accent': currentTheme.other.fgAccent,
    '--portfolio-color-fg-accent-hover': currentTheme.other.fgAccentHover,
    '--portfolio-color-fg-love': currentTheme.other.fgLove,
    '--portfolio-color-blue-bg': currentTheme.other.blueBg,
    '--portfolio-color-blue-border': currentTheme.other.blueBorder,
    '--portfolio-color-blue-text': currentTheme.other.blueText,
    '--portfolio-color-green-bg': currentTheme.other.greenBg,
    '--portfolio-color-green-border': currentTheme.other.greenBorder,
    '--portfolio-color-green-text': currentTheme.other.greenText,
    '--portfolio-color-orange-bg': currentTheme.other.orangeBg,
    '--portfolio-color-orange-border': currentTheme.other.orangeBorder,
    '--portfolio-color-orange-text': currentTheme.other.orangeText,
    '--portfolio-color-purple-bg': currentTheme.other.purpleBg,
    '--portfolio-color-purple-border': currentTheme.other.purpleBorder,
    '--portfolio-color-purple-text': currentTheme.other.purpleText,
  },
  light: {},
  dark: {},
});

export default function App() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={cssVariablesResolver}
      defaultColorScheme="dark"
    >
      <Router />
    </MantineProvider>
  );
}
