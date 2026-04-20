import { createTheme } from "@mantine/core";

export const monoFontStack =
  '"JetBrains Mono", "Fira Code", "IBM Plex Mono", "Cascadia Mono", "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export const theme = createTheme({
  fontFamilyMonospace: monoFontStack,
  other: {
    bgBase: "#06070b",
    bgElevated: "#090b11",
    divider: "#111722",
    panelBorder: "#202639",
    badgeBorder: "#31364a",
    panelBg: "#0f1320",
    panelGradientStart: "rgb(11 13 20 / 95%)",
    panelGradientStartStrong: "rgb(11 13 20 / 96%)",
    panelGradientEnd: "rgb(8 10 16 / 92%)",
    shadowStrong: "rgb(0 0 0 / 50%)",
    glowBlue: "rgb(112 166 255 / 20%)",
    glowMint: "rgb(102 255 210 / 16%)",
    dotRed: "#ff5f57",
    dotAmber: "#febc2e",
    dotGreen: "#28c840",
    fgBase: "#e8ecf4",
    fgStrong: "#f6f7fb",
    fgEmphasis: "#d9dfef",
    fgMuted: "#8f9ab2",
    fgSubtle: "#a5b1ca",
    fgSoft: "#96a0b8",
    fgSoftHover: "#c4d1ec",
    fgMid: "#b4c0d8",
    fgBright: "#d7e3ff",
    fgAccent: "#c5d5f8",
    fgAccentHover: "#e7efff",
    fgLove: "#ff7a9f",
    blueBg: "rgb(16 48 99 / 34%)",
    blueBorder: "#4c9eff",
    blueText: "#c5e2ff",
    greenBg: "rgb(17 88 70 / 34%)",
    greenBorder: "#44d9ad",
    greenText: "#c9f9ea",
    orangeBg: "rgb(104 53 18 / 34%)",
    orangeBorder: "#ff9f47",
    orangeText: "#ffe1c4",
    purpleBg: "rgb(79 38 110 / 34%)",
    purpleBorder: "#c174ff",
    purpleText: "#e9d2ff",
  },
  components: {
    Anchor: {
      defaultProps: {
        underline: "never",
      },
    },
  },
});
