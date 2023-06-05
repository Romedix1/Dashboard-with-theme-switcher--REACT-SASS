import React from 'react';
import SmallerCardData from './smallerCardData';
import SmallerCard from './smallerCard';

export default function smallerCardSection() {
    const SmallerCards = SmallerCardData.map(item => {
        return (
            <SmallerCard 
                id={item.id}
                {...item}
            />
        )
    }) 


    return (
        <section className="smaller-card-section">
            <h3 className="smaller-card--header">Overview - Today</h3>
            
            <div className='smaller-card--cards-main-container'>
                {SmallerCards}
            </div>
         </section>
    )
}