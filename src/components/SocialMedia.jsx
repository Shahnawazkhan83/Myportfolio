import React from 'react'
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className=" app__social">
            <div>
                <a href="https://www.linkedin.com/in/shahnawaz-khan-iiitr/" target="blank">
                    <FaLinkedinIn />
                </a>
            </div>

            <div>
            <a href="mailto:khanshahnawaz1046@gmail.com" target="blank">
                <BiMailSend />
                </a>
            </div>

            <div>
            <a href="https://github.com/Shahnawazkhan83" target="blank">
                <FaGithub />
                </a>
            </div>

            <div>
            <a href="https://twitter.com/shahnaw47460437" target="blank">
                <BsTwitter />
                </a>
            </div>
            
            <div>
            <a href="https://www.facebook.com/profile.php?id=100083134947749" target="blank">
                <FaFacebookF />
                </a>
            </div>
{/* 
            <div>
            <a href="https://www.instagram.com/shahnawazkhan8156/" target="blank">
                <BsInstagram />
                </a>
            </div> */}
        </div>
    )
}

export default SocialMedia
