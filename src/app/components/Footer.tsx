"use client"
import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { PiCertificate } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className=" p-4 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                    <span className="text-green-500 mr-2"><PiCertificate /></span>
                    <span className="text-white text-sm">SEBI Reg. No. INH000009180</span>
                </div>
                <div className="flex items-center">
                    <span className="text-white text-sm mr-4">Share On</span>
                    {/* Replace 'circle' with actual social media icons */}
                    <button className="text-gray-400 mr-2"><CiTwitter /></button>
                    <button className="text-gray-400 mr-2"><FaInstagram /></button>
                    <button className="text-gray-400 mr-2"><CiLinkedin /></button>
                    <button className="text-gray-400 mr-2"><FaWhatsapp /></button>
                    <button className="text-gray-400"><CiFacebook /></button>
                </div>
            </div>
        
        
      </footer>
    );
  };
  
  export default Footer;
  
  