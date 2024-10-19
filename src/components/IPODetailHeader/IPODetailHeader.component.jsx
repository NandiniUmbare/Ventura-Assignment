import React from 'react';
import {
  Container,
  BackButton,
  CompanyName,
  Logo,
  CompanyTitle,
  NavLeft,
  NavRight,
  DownloadButton,
  ApplyButton
} from './IPODetailHeader.styles';
import {useNavigate} from 'react-router-dom';


export const IPODetailHeader = ({ipoDetails}) => {
  const navigate = useNavigate();
  const downloadPdf = () => {
    const pdfUrl = ipoDetails.pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute('target', '_blank');
    link.download = `${ipoDetails.companyName}-ipo.pdf`; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Container>
      <NavLeft>
        <BackButton onClick={() => navigate('/')}>
          {'<'}
        </BackButton>
        <CompanyName>
          <Logo src={ipoDetails.logo} alt={ipoDetails.companyName}/>
          <CompanyTitle>
            <h3>{ipoDetails.companyName}</h3>
            <p>{ipoDetails.fullName}</p>
          </CompanyTitle>
        </CompanyName>
      </NavLeft>
      <NavRight>
        <DownloadButton onClick={() => downloadPdf()}/>
        {/* link not provided */}
        <ApplyButton onClick={() => navigate('#')}>Apply now</ApplyButton>
      </NavRight>
    </Container>
  )
}
