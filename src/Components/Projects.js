import React from 'react';
import ProjectBox from './ProjectBox';
import snazzyNagarImage from '../images/snazzyNagarImage.png';
import TheRickandMortyCharacterFinderImage from '../images/TheRickandMortyCharacterFinderImage.png';
import YoutubeChatbotextensionImage from '../images/YoutubeChatbotextensionImage.png';
import TindogImage from '../images/TindogImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={snazzyNagarImage} projectName="snazzyNagar" />
        <ProjectBox projectPhoto={TheRickandMortyCharacterFinderImage} projectName="TheRickandMortyCharacterFinder" />
        <ProjectBox projectPhoto={YoutubeChatbotextensionImage} projectName="YoutubeChatbotextension" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />

      </div>

    </div>
  )
}

export default Projects