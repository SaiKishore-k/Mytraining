import React from 'react'
import { NavLink } from 'react-router-dom'
export const About = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 md-pb col-md-12 col-lg-6">
                <div className="text-wrapper align-left">
                    <h1 className="mbr-section-title align-left mbr-fonts-style mb-4 display-1">About Us</h1>
                    <p className="mbr-text align-left mbr-fonts-style display-7">
                    “I pronounce after all there is no pleasure like perusing!”- Jane Austen, Pride, and Prejudice.<br/><br/>

Dear readers,<br/>

We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, History, Religions, Self – Help, Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College and School content references books proposed by various foundations as schedule the nation over. Other than this, we likewise offer an expansive gathering of E-Books at reasonable valuing.
                        </p>
                    
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 image-wrapper">
                <img className="w-100" src="assets/images/about.jpeg" alt=""/>
            </div>
            <ul className="nav nav-pills">
                <li className='nav-item'>
                <NavLink
                    to={`/home`}
                    className="nav-link" aria-current="page"
                  >
                    Get started
                  </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}
export default About