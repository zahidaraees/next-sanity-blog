import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <> 
      <div className="font-sans bg-gray-100 px-4 py-12 mt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">About Us</h2>
            <p className="mb-4 text-sm text-gray-500">Dear Reader,</p>
            <p className="mb-4 text-sm text-gray-500">
              My name is Zahida Raees, and I am an IT professional and a passionate literary author. Research and writing are among my greatest joys, and I am particularly fascinated by learning about the world&apos;s most famous cities.
            </p>
            <p className="mb-4 text-sm text-gray-500">
              I created this blog for people like me—those who have a love for travel and a curiosity about cities they plan to visit. Through this platform, I hope to provide valuable insights that can help you explore and understand these destinations even before setting foot there.
            </p>
            <p className="mb-4 text-sm text-gray-500">
              If you would like to learn more about yourself, your favorite city, or if you have information you&apos;d like to share, feel free to reach out. I would be delighted to feature your contributions here.
            </p>
            <p className="mb-4 text-sm text-gray-500">Thank you so much for visiting the blog!</p>
            <p className="mb-4 text-sm text-gray-500">Warm regards,</p>
            <p className="mb-4 text-sm text-gray-500">Zahida Raees</p>
          </div>
          <div>
            <Image 
              className="rounded-lg object-contain w-full h-full"
              src="https://personal-portfolio-react-nextjs-css.vercel.app/_next/image?url=%2Fassets%2Fzr_pic_latest.jpg&w=384&q=75" 
              alt="Zahida Raees"
              width={500} 
              height={500} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
