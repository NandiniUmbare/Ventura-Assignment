import React, { useEffect } from 'react';
import { 
    StyledContainer, 
    StyledHeader, 
    DataRow, 
    Companyheading,
    StyledLogo  } from './IPOListing.style';
import { data } from '../../mockData/ipo-list';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import IpoDataSlice from '../../redux/IpoDataSlice';

const actions = IpoDataSlice.actions
export const IPOListing = () => {
  const dispatch = useDispatch();
  const {ipoData} = useSelector(store => store.ipoData);
  const navigate = useNavigate();
  const navigateToIpoDetails = (ipoId) => {
    navigate(`/details/${ipoId}`);
  }

  useEffect(()=>{
    dispatch(actions.setIpoData(data))
  },[])
  return (
    <>
        <h1>IPO List</h1>
        <StyledContainer>
            <StyledHeader>
                <div>Company / Issue Date</div>
                <div>Issue size</div>
                <div>Price range</div>
                <div>Min invest/qty</div>
            </StyledHeader>
            {ipoData.map((ipo, index) => {
                return <DataRow key={index} onClick={() => {navigateToIpoDetails(ipo.id)}}> 
                    <div> 
                        <Companyheading>
                            <StyledLogo src={ipo.logo} alt={`${ipo.companyName} logo`} />
                            <div>
                                <h3>{ipo.companyName}</h3>
                                <p>{ipo['issue-date']}</p>
                            </div>
                        </Companyheading>
                    </div>
                    <div>
                        <h3>{ipo['issue-size']}</h3>
                    </div>
                    <div>
                        <h3>{ipo['prize-range']}</h3>
                    </div>
                    <div>
                        <h3>₹{ipo.min}</h3>
                        <p>{ipo['invest/qty']}</p>
                    </div>
                </DataRow>
            })}
        </StyledContainer>
    </>
  )
}
