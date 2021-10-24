import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I want to pursue a challenging career and be a part of progressive
        organization that gives a scope to enhance my knowledge, utilize my
        skills towards the growth of the organization and use them to solve
        challenging problems in a creative and effective manner.
      </SectionText>
      <Button
        onClick={() => {
          window.open("mailto:tarun.wakharkar@gmail.com");
        }}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
