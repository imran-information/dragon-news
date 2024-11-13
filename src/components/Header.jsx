import React from 'react';
import Logo from "../assets/logo.png"
import moment from 'moment';
const Header = () => {
    // const targetDate = new Date(); // Months are 0-based in JavaScript, so 10 represents November

    // // Format the date
    // const formattedDate = new Intl.DateTimeFormat('en-US', {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    // }).format(targetDate);
   
    return (
        <div className='flex flex-col justify-center items-center py-5'>
            <img className='' src={Logo} alt="" />
            <h3 className='text-xl text-gray-400 py-2'>Journalism Without Fear or Favour</h3>
            <h3 className='text-xl'>{ moment().format("dddd , MMMM Do YYYY")}</h3>
        </div>
    );
};

export default Header;