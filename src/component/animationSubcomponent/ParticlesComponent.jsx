import { useId, useState, useEffect } from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import ConfigDark from "../../config/particlesjs-config.json";
import ConfigLight from "../../config/particlesjs-config-light.json";

const THEME_BG = {
  dark: "radial-gradient(ellipse 80% 70% at 50% 40%, #2e0e13 0%, #190709 58%, #0c0405 100%)",
  light: "radial-gradient(ellipse 80% 70% at 50% 40%, #a32b34 0%, #871f27 55%, #5c141a 100%)",
};

const ACCENTS = ["#ff5c72", "#ffc46b", "#ffd9a3"];
const LINK_COLOR = "#ff5c72";

const Box = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background: ${({ $bg }) => $bg};
`;

const applyTheme = (config) => {
  const c = JSON.parse(JSON.stringify(config));
  c.particles = c.particles || {};
  c.particles.color = { value: ACCENTS };
  if (c.particles.links) c.particles.links.color = LINK_COLOR;
  if (c.particles.line_linked) c.particles.line_linked.color = LINK_COLOR;
  return c;
};

/* Desktop keeps the animated particles. Touch devices and reduced-motion
   users receive an opaque static glass background with no canvas work. */
const useLiteMode = () => {
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 820px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setLite(smallScreen || coarse || reduced);
  }, []);

  return lite;
};

const ParticlesComponent = ({ theme = "dark" }) => {
  const lite = useLiteMode();
  const reactId = useId().replace(/:/g, "");
  const bg = THEME_BG[theme] || THEME_BG.dark;
  const className = `modal-particles-bg modal-particles-bg--${theme} ${
    lite ? "is-static" : "is-animated"
  }`;

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  if (lite) {
    return <Box className={className} $bg={bg} aria-hidden="true" />;
  }

  const base = theme === "light" ? ConfigLight : ConfigDark;
  const options = applyTheme(base);

  return (
    <Box className={className} $bg={bg} aria-hidden="true">
      <Particles
        id={`modal-particles-${reactId}`}
        init={particlesInit}
        options={options}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default ParticlesComponent;
