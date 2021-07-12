import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies</SectionTitle>
    <SectionText>I've worked with some Technologies in the web development world. From Front-end to design, and still improving my arsenal.
    </SectionText>
   <List>
     <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
        Experience with <br />
        React.js
        </ListParagraph>
      </ListContainer>
     </ListItem>
     <ListItem>
     <DiZend size="3rem" />
    <ListContainer>
      <ListTitle>Design</ListTitle>
      <ListParagraph>
        Experience with tools like <br />
        Figma
      </ListParagraph>
    </ListContainer>
     </ListItem>
     <ListItem>
     <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br />
        Node and database(Json)
      </ListParagraph>
    </ListContainer>
     </ListItem>
   </List>
  </Section>
);

export default Technologies;
