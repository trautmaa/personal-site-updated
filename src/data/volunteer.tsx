import React from 'react';
import { ExperienceSectionProps } from 'components/ExperienceSection';
// @ts-ignore
import projectdiversity from '../assets/projectdiversity.jpg';
// @ts-ignore
import connections from '../assets/connections.jpeg';

export const VOLUNTEER_EXPERIENCE_DATA: ExperienceSectionProps[] = [
  {
    imgSrc: connections,
    company: 'Connections School of Atlanta',
    jobTitle: 'Substitute Assistant Teacher',
    location: 'Atlanta, GA',
    dateRange: 'August 2017 - February 2018',
    body: (
      <p>
        Connections School of Atlanta, Inc. is a private school for adolescents
        aged 14 to 21 with Autism Spectrum Disorders, Sensory Processing
        Disorders, ADHD, and other neurodevelopmental differences when relating
        and communicating.
      </p>
    ),
  },
  {
    imgSrc: projectdiversity,
    company: 'Project Diversity',
    jobTitle: 'Ultimate Frisbee Coach',
    location: 'Atlanta, GA',
    dateRange: 'September 2019 - Current',
    body: (
      <p>
        Coached and taught ultimate frisbee to middle-school aged Atlanta youth
        at an after school program.
      </p>
    ),
  },
];
