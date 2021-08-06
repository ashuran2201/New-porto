import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portofolio
      </SectionTitle>
      <SectionText>
        I will help you create Javascript and React.js Website.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;