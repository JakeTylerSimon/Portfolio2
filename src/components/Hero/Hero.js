import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (

  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
       An established Full-Stack JavaScript developer who offers excellence to businesses 
       for not only their work, but for their client's websites and applications too!
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com/in/jaketylersimon'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
  
);

export default Hero;