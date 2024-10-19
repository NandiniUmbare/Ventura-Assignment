import React from 'react';
import { Container,
  DetailContainer,
  Card
  } from './IPOdetails.styles';

export const IPOdetails = ({ipoDetails}) => {
  return (
    <Container>
      <h2>IPO details</h2>
      <DetailContainer>
        <Card>
          <p>Issue size</p>
          <h4>{ipoDetails['issue-size']}</h4>
        </Card>
        <Card>
          <p>Price range</p>
          <h4>{ipoDetails['prize-range']}</h4>
        </Card>
        <Card>
          <p>Minimum amount</p>
          <h4>₹{ipoDetails.min}</h4>
        </Card>
        <Card>
          <p>Lot size</p>
          <h4>{ipoDetails['invest/qty']}</h4>
        </Card>
        <Card>
          <p>Issue dates</p>
          <h4>{ipoDetails['issue-date']}</h4>
        </Card>
        <Card>
          <p>Listed on</p>
          <h4>{ipoDetails.listedOn}</h4>
        </Card>
        <Card>
          <p>Listed Price</p>
          <h4>{ipoDetails.listedPrice}</h4>
        </Card>
        <Card>
          <p>Listing Gains</p>
          <h4>{ipoDetails.listingGains}</h4>
        </Card>
      </DetailContainer>
    </Container>
  )
}
