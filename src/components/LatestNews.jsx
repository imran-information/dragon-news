import React from 'react';
import Marquee from "react-marquee-slider";
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 p-3 bg-gray-200 items-center'>
            <p className='bg-[#D72050] text-xl px-5 py-3 text-white'>Latest</p>
            <Marquee velocity={80}>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;