import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const Navigate = useNavigate();

    const notesArray = [
        {
            title: 'STYLING ACCESSORIES THAT COMPLEMENT YOUR FORMAL WEAR',
            link: '/blog/styling-accessories-that-complement-your-formal-wear'
        },
        {
            title: '5 CLASSIC LOOKS FOR HER',
            link: '/blog/5-classic-looks-for-her'
        },
        {
            title: 'ACING YOUR FORMAL ATTIRE',
            link: '/blog/acing-your-formal-attire'
        },
        {
            title: 'SELECTING & STYLING YOUR WORKWEAR',
            link: '/blog/selecting-and-styling-your-workwear'
        },
        {
            title: 'LET’S TALK ‘BODY TYPES’, WOMEN!',
            link: '/blog/lets-talk-body-types-women-'
        },
        {
            title: '5 CLASSIC LOOKS FOR HIM',
            link: '/blog/5-classic-looks-for-him'
        },
        {
            title: 'TIPS FOR A GREAT OUTFIT',
            link: '/blog/tips-for-a-great-outfit'
        },
        {
            title: 'DRESSING TO SUCCEED: THE IMPORTANCE OF ‘FORMALS’',
            link: '/blog/dressing-to-succeed-the-importance-of-formals'
        },
        {
            title: 'WORKWEAR FOR ALL SEASONS: THE WOMEN EDIT',
            link: '/blog/workwear-for-all-seasons-the-women-edit'
        },
        {
            title: 'THE ACECRAFT DIFFERENCE',
            link: '/blog/the-acecraft-difference'
        },
        {
            title: 'CORPORATE TO CUPCAKES! – STORY OF A SUPERWOMAN.',
            link: '/blog/corporate-to-cupcakes-story-of-a-superwoman-'
        },
        {
            title: 'HOW TO COMPLETE YOUR COLLEGE LOOK',
            link: '/blog/how-to-complete-your-college-look'
        },
        {
            title: 'DRESS THE RIGHT WAY TO IMPRESS THE RIGHT WAY',
            link: '/blog/dress-the-right-way-to-impress-the-right-way'
        }
    ];

    return (
        <div className='notes_wrapper'>
            <div className='heading-txt'>Blogs</div>
            <div className='d-flex content_area'>
                {notesArray.map((item, index) => {
                    return (
                        <div className='box' key={index} onClick={() => Navigate(item.link)}>
                            <div className='box-txt'>{item.title}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Notes;