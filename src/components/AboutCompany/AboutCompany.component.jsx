import React, {useState} from 'react';
import { 
  Container,
  DesktopView,
  MobileView
} from './AboutCompany.styles';

export const AboutCompany = ({about, company}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Container>
      <DesktopView>
        <h2>About the company</h2>
        <p>{about}</p>
      </DesktopView>
      <MobileView>
        <h2>{company}</h2>
        <p>{isExpanded ? about : `${about.substring(0, 100)}...`}</p>
        <span style={{color: 'red'}} onClick={toggleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </span>
      </MobileView>
    </Container>
  )
}
