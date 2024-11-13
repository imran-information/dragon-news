import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNav from '../components/layout-componet/LeftNav';
import RightNav from '../components/layout-componet/RightNav';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-10/12 mx-auto py-8'>
                <Navbar></Navbar>
            </nav>
            <main className='w-10/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='left col-span-3'>
                    <LeftNav></LeftNav>
                </aside>
                <section className='col-span-6'>
                    
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;