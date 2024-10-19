import React from 'react';
import {
  Container,
  TimeLine,
  TimelineEvent,
  TimelineIcon,
  TimelineDetails,
  EventTitle,
  EventDate,
  TimelineLine
} from './IPOTimeLine.styles';

export const IPOTimeLine = ({timeline}) => {
  
  return (
    <Container>
      <h2>IPO timeline</h2>
      <TimeLine>
      {timeline && timeline.map((event, index) => (
        <TimelineEvent key={index}>
          <TimelineIcon className={`${event.completed ? 'completed' : ''}`}>
            {event.completed ? '✓' : ''}
          </TimelineIcon>
          <TimelineDetails>
            <EventTitle>{event.title}</EventTitle>
            <EventDate>{event.date}</EventDate>
          </TimelineDetails>
          {index < timeline.length - 1 && <TimelineLine></TimelineLine>}
        </TimelineEvent>
      ))}
      </TimeLine>
    </Container>
  )
}
