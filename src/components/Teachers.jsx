import React from 'react';
import { Parallax } from 'react-parallax';
import Teacher from './Teacher';

const Teachers = () => (
    <Parallax className=''  bgImage="Banner-Clouds.png" bgImageAlt="the cat" strength={800}>
        <div className='w-[80%] mx-auto'>
            <h1 className='font-bold text-4xl text-center mt-[7rem] mb-[3rem]'>Our Incredible Teachers</h1>
            <p className='mb-[3rem] text-center'>Our teachers are carefully selected for their training and experience, as well 
                as for their commitment to working collaboratively with parents to enrich 
                the early-childhood years.</p>

                <div className='flex justify-between'>
                    <Teacher imgSrc="johnson.jpeg"
                            title="MR. JOHNSON A. ODUNIYI" 
                            position="VP Academics"
                    />
                    <Teacher imgSrc="abey.jpeg"
                            title="MR. ABIODUN SAIBU" 
                            position="VP Administration"
                    />
                    <Teacher imgSrc="tracy.jpeg"
                            title="MRS AYELAGBE TRACY" 
                            position="Principal"
                    />
                            
                </div>
        </div>
    </Parallax>
);

export default Teachers