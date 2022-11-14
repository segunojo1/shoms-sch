import React from 'react';
import { Parallax } from 'react-parallax';

const Img = () => (
    <Parallax className='h-[70vh] w-[100%] text-white '  bgImage="Banner-KidsPlaying.png" bgImageAlt="banner" strength={400}>
        <div className='flex flex-col items-center justify-center h-[70vh]'>
            <h1 className='font-bold text-5xl mb-[3rem] '>an Inspired life begins</h1>
            <button className='p-[10px] px-[30px] bg-purple rounded-full cursor-pointer'>ENROLL YOUR KIDS AT SHOMS</button>
        </div>
    </Parallax>
);

export default Img