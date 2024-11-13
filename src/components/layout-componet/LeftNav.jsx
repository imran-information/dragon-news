import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    // console.log(categories);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category)
            )
    }, [])
    return (
        <div>
            <h3 className='text-xl font-semibold'>All Category</h3>
            <div className='flex flex-col gap-4 pt-5'>
                {categories.map((category) => (
                    <button key={category.category_id} className='btn'>{category.category_name}</button>
                ))}
            </div>
        </div>
    );
};

export default LeftNav;