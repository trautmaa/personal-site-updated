import React from 'react';
import Links from 'components/Links';
// @ts-ignore
import headshot from '../assets/atheadshot.png';
// @ts-ignore
import miniatheadshot from '../assets/mini/atheadshot.svg';
// @ts-ignore
import frisbee from '../assets/frisbee.jpg';
// @ts-ignore
import minifrisbee from '../assets/mini/frisbee.svg';
// @ts-ignore
import fish from '../assets/fish.jpg';
// @ts-ignore
import minifish from '../assets/mini/fish.svg';
import ExperienceSection from 'components/ExperienceSection';
import { SKILLS_DATA } from '../data/skills';
import { WORK_EXPERIENCE_DATA } from '../data/work';
import { VOLUNTEER_EXPERIENCE_DATA } from '../data/volunteer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TextOverlay from './TextOverlay';

export default () => (
  <div className='profile'>
    <div style={{ height: `6rem` }}></div>
    <div className='panel-wrapper'>
      <div className='panel left'>
        <div className='panel card'>
          <div className='picture-section'>
            <div className='cropper avatar'>
              <LazyLoadImage
                alt={'Alex Trautman'}
                src={headshot}
                placeholderSrc={miniatheadshot}
              />
            </div>
            <div className='name-section'>
              <h2>Alex Trautman</h2>
            </div>
          </div>
          <p>
            I love people, problem solving and test-driven development. I
            currently work as a front-end focused software engineer at Honeywell
            building developer software.
          </p>
          <p>
            I have a high attention to detail, and I’m always looking for ways
            to work better.
          </p>
          <Links />
        </div>
        <div className='panel card collage'>
          <h3>About Me</h3>
          <div className='images-wrapper'>
            <TextOverlay
              img={
                <LazyLoadImage
                  alt={'Alex Trautman'}
                  src={frisbee}
                  placeholderSrc={minifrisbee}
                />
              }
              text={
                'Demonstrating proper pancake technique with the Atlanta Hustle.'
              }
            />
            <TextOverlay
              img={
                <LazyLoadImage
                  alt={'Alex Trautman'}
                  src={fish}
                  placeholderSrc={minifish}
                />
              }
              text={'Wrangling an Alaskan salmon.'}
            />
          </div>
        </div>
      </div>
      <div className='panel right'>
        <div className='panel card profile-section bio'>
          <h3>Bio</h3>
          <p>
            <b>Location</b>
            <span>Atlanta, GA</span>
          </p>
          <p>
            <b>Education</b>
            <span>B.A., Carleton College</span>
          </p>
          <p>
            <b>Major</b>
            <span>Computer Science</span>
          </p>
        </div>
        <div className='panel card profile-section skills'>
          <h3>Skills</h3>
          {Object.keys(SKILLS_DATA).map((key) => (
            <>
              <p>{key}</p>
              <div className='section'>
                {SKILLS_DATA[key as keyof typeof SKILLS_DATA].map(
                  (skill: string) => (
                    <span key={skill}>{skill}</span>
                  )
                )}
              </div>
            </>
          ))}
        </div>
        <div className='panel card profile-section'>
          <h3>Work Experience</h3>
          {WORK_EXPERIENCE_DATA.map(
            ({ imgSrc, company, jobTitle, location, dateRange, body }) => (
              <ExperienceSection
                key={company}
                imgSrc={imgSrc}
                company={company}
                jobTitle={jobTitle}
                location={location}
                dateRange={dateRange}
                body={body}
              />
            )
          )}
        </div>
        <div className='panel card profile-section'>
          <h3>Volunteering</h3>
          {VOLUNTEER_EXPERIENCE_DATA.map(
            ({ imgSrc, company, jobTitle, location, dateRange, body }) => (
              <ExperienceSection
                imgSrc={imgSrc}
                company={company}
                jobTitle={jobTitle}
                location={location}
                dateRange={dateRange}
                body={body}
              />
            )
          )}
        </div>
      </div>
    </div>
  </div>
);
