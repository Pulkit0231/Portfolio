import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Pulkit Nagar</h4>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Pulkit0231" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/pulkit-nagar-68853a216/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a href='mailTo:plktnagar@gmail.com' target='_blank' rel="noreferrer"><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer