import React from 'react';
import {
  FiGithub,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi';

const Socials = () => {
  const social = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/Abhishek280999',
    },
    {
      icon: <FiFacebook />,
      href:
        'https://www.facebook.com/profile.php?id=100007476169410&mibextid=ZbWKwL',
    },
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/abhishek-darwekar',
    },
    {
      icon: <FiInstagram />,
      href:
        'https://www.instagram.com/_._a_b_h_i_._/?igshid=MzNlNGNkZWQ4Mg%3D%3D',
    },
  ];

  return (
    <nav>
      <ul className="flex space-x-6 ">
        {social.map((item, index) => {
          return (
            <li
              className="flex justify-center items-center"
              key={index}
            >
              <a
                className="text-2xl p-4 border border-white rounded-full hover:bg-slate-400"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Socials;
