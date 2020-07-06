import React from 'react';

export interface ExperienceSectionProps {
  imgSrc: any;
  company: string;
  jobTitle: string;
  location: string;
  dateRange: string;
  body: string | React.ReactElement;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  imgSrc,
  company,
  jobTitle,
  location,
  dateRange,
  body,
}) => {
  return (
    <div className='experience-section'>
      <div className='flex'>
        <img src={imgSrc} alt={company + ' logo'} />
        <div className='left'>
          <h4>{company}</h4>
          <p>{jobTitle}</p>
        </div>
        <div className='right'>
          <h4>{location}</h4>
          <p>{dateRange}</p>
        </div>
      </div>
      {body}
    </div>
  );
};
export default ExperienceSection;
