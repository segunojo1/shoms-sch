import React from 'react';
import { Parallax } from 'react-parallax';

const Teachers = () => (
    <Parallax className='h-[100vh]'  bgImage="Banner-Clouds.png" bgImageAlt="the cat" strength={400}>
        <div className='w-[80%] mx-auto'>
            <h1 className='font-bold text-4xl text-center mt-[7rem] mb-[3rem]'>Our Incredible Teachers</h1>
            <p className=''>Our teachers are carefully selected for their training and experience, as well 
                as for their commitment to working collaboratively with parents to enrich 
                the early-childhood years.</p>
        </div>
    </Parallax>
);

export default Teachers