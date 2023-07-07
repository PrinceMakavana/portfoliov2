import React from "react";
import Particles from "react-tsparticles";
import { particlesConfig } from "./particles-config";
function ParticlesBackground() {
  return <Particles params={particlesConfig}></Particles>;
}

export default ParticlesBackground;
