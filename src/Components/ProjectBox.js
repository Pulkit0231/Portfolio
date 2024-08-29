import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    snazzyNagarDesc: "A product listing website to showcase our startup's products. It contains a feature section on the home page and navigation to different routes featured in the header. In the Products route, users can choose products, add them to the cart, and make changes to the cart. Utilized Redux for state management to ensure consistent and predictable application state.",
    snazzyNagarGithub: "https://github.com/Pulkit0231/snazzyNagarFrontend",
    snazzyNagarWebsite: "https://snazzynagar.netlify.app/",

    TheRickandMortyCharacterFinderDesc: "Show alist of characters with details such as a photo and name using the Rick and Morty Open API. Developed the front-end using React, ensuring a responsive design that works seamlessly across desktops, tablets, and mobile devices. Implementedsearch functionality for easy character lookup. Integrated pagination for a user-friendly browsing experience. Textboxatthetop where theuser can filter by name.",
    TheRickandMortyCharacterGithub: "https://github.com/Pulkit0231/theRickAndMorty",
    TheRickandMortyCharacterWebsite: "https://therickandmortycharacterapi.netlify.app/",

    YoutubeChatbotextensionDesc: "A webextension that allows users to interact with a chatbot capable of understanding and responding based on the content of a YouTube video.  Provides achat interface embedded within the YouTube page. The backend server processes the request using a Generative AI model to generate responses based on the video URL. Automatic popup after opening any YouTube URL",
    YoutubeChatbotextensionGithub: "https://github.com/Pulkit0231/Youtube-ChatAI",

    TindogDesc: "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/Pulkit0231/TinDog",
    TindogWebsite: "https://pulkit0231.github.io/TinDog/",
  }

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox