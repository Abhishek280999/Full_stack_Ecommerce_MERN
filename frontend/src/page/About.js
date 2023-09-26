// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nulla eu nulla
          laoreet, nec facilisis metus feugiat. Vivamus rhoncus hendrerit tortor, eu varius augue
          congue ac.
        </p>
        <p className="mt-4 text-gray-700">
          Sed nec congue odio, eu semper nisl. Fusce pharetra, felis nec tristique rutrum, sem ex
          condimentum quam, eu euismod dolor dolor eget.
        </p>
      </div>
    </div>
  );
};

export default About;
