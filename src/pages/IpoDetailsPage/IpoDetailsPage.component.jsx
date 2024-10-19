import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IPOdetails } from '../../components/IPOdetails';
import { IPOTimeLine} from '../../components/IPOTimeLine';
import { AboutCompany } from '../../components/AboutCompany';
import { IPODetailHeader} from '../../components/IPODetailHeader';

export const IpoDetailsPage = () => {
  const [ipo, setIpo] = useState({});
  const {ipoData} = useSelector(store => store.ipoData);
  const params = useParams();
  useEffect(()=>{
    const ipoDetails = ipoData.filter(ipo => ipo.id === params.ipoId);
    setIpo(ipoDetails[0]);
  },[])
  return (
  <>
    <IPODetailHeader ipoDetails= {ipo}/>
    <IPOdetails ipoDetails={ipo}/>
    <IPOTimeLine timeline={ipo.timeline }/>
    <AboutCompany about={ipo.desciption} company={ipo.fullName}/>
  </>
  )
}
