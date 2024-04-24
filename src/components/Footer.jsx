import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 py-7">
      <div className="max-w-5xl m-auto px-1">
        <div className='flex justify-between items-center'>
          <p className='text-white'>Copyright © 2024 E-Commerce. All rights reserved.</p>
          <div className="logos flex gap-10 justify-center">
          <Link>
            <CiFacebook color="white" className="text-5xl" />
          </Link>
          <Link className="nav-item">
            <CiInstagram color="white" className="text-5xl" />
          </Link>
          <Link className="nav-item">
            <CiTwitter color="white" className="text-5xl" />
          </Link>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
