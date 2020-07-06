import React from 'react';
import { ExperienceSectionProps } from 'components/ExperienceSection';
// @ts-ignore
import honeywell from '../assets/honeywell.jpg';
// @ts-ignore
import village from '../assets/village.jpeg';
// @ts-ignore
import carleton from '../assets/carleton.png';
// @ts-ignore
import fourcubed from '../assets/fourcubed.png';
// @ts-ignore
import tns from '../assets/tns.png';
// @ts-ignore
import hmi from '../assets/hmi.png';
// @ts-ignore
import truenorth from '../assets/truenorth.png';

export const WORK_EXPERIENCE_DATA: ExperienceSectionProps[] = [
  {
    imgSrc: honeywell,
    company: 'Honeywell',
    jobTitle: 'Senior Software Engineer',
    location: 'Atlanta, GA',
    dateRange: 'September, 2018 - Current',
    body: (
      <p>
        Taught sophomores at The New School the basics of web development
        including HTML, CSS and Bootstrap, and JavaScript. Guided students
        through the creation of their own personal websites.
      </p>
    ),
  },
  {
    imgSrc: tns,
    company: 'The New School',
    jobTitle: 'Backend Bootcamp Instructor',
    location: 'Atlanta, GA',
    dateRange: 'Spring 2018',
    body: (
      <>
        <p>
          Taught sophomores at The New School the basics of web development
          including HTML, CSS and Bootstrap, and JavaScript. Guided students
          through the creation of their own personal websites.
        </p>
        <p>
          Helped lead a culminating hackathon in which students designed and
          built websites for local businesses that needed an improved web
          presence.
        </p>
      </>
    ),
  },
  {
    imgSrc: village,
    company: 'Village',
    jobTitle: 'Founder / Developer / Designer',
    location: 'Atlanta, GA',
    dateRange: 'August 2017 - February 2018',
    body: (
      <p>
        Village is a web app that helps adolescent boys master their emotions
        with an AI chat tool that listens, validates, and coordinates efforts
        among their caregivers.
      </p>
    ),
  },
  {
    imgSrc: truenorth,
    company: 'True North Wilderness Program',
    jobTitle: 'Wilderness Therapy Guide',
    location: 'Waitsfield, VT',
    dateRange: 'January 2017 - July 2017',
    body: (
      <p>
        I ensure the safety of our teenage students. I encourage students
        through challenges as they work through therapy and develop survival
        skills to graduate from our research-driven program.
      </p>
    ),
  },
  {
    imgSrc: hmi,
    company: 'High Mountain Institute',
    jobTitle:
      'Assistant Math Teacher, Residential Life, Wilderness Trip Leader',
    location: 'Leadville, CO',
    dateRange: 'August 2016 - December 2016',
    body: (
      <p>
        Professional residency program in education. Led wilderness trips for
        high school students. Taught leadership and backcountry skills.
        Residential life.
      </p>
    ),
  },
  {
    imgSrc: fourcubed,
    company: 'FourCubed',
    jobTitle: 'Software Developer',
    location: 'Minneapolis, MN',
    dateRange: 'August 2015 - July 2016',
    body: (
      <p>
        Front-end website creation and updates using HTML/CSS, JavaScript, Adobe
        Suite. MySQL Database backup and management. Back-end maintenance of our
        Ruby on Rails app.
      </p>
    ),
  },
  {
    imgSrc: carleton,
    company: 'Carleton College',
    jobTitle: 'Assistant Systems Administrator',
    location: 'Northfield, MN',
    dateRange: 'June 2014 - June 2015',
    body: (
      <>
        <p>
          Built the Mac OS / Linux systems for the Computer Science and
          Mathematics departments
        </p>
        <p>Coded in Python, bash; created scripts to update systems</p>
        <p>Designed posters for dept. events; created a textbook cover</p>
      </>
    ),
  },
];
