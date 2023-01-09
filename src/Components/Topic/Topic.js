import React from 'react';
import './Topic.css'
import { ArrowDownIcon, ArrowLongRightIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid';
const Topic = ({topic}) => {
    console.log(topic)
    const {id,name,logo,total}=topic
    return (
        <div className='topic-card'>
            <img src={logo} alt=""/>
            <div className='card-info'>
                <h3>{name}</h3>
                <button className='' type="">Start Practice <ArrowSmallRightIcon
                 className='arrow-icon'/></button>
            </div>
        </div>
    );
};

export default Topic;