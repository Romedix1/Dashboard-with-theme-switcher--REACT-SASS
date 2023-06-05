import React from "react";
import BiggerCardData from "./biggerCardData"
import BiggerCard from "./biggerCard"

export default function biggerCardSection() {
    const BiggerCards = BiggerCardData.map(item => {
        return (
            <BiggerCard 
                key={item.id}
                {...item}
             />
        )
    })
    return (
        <section className="bigger-cards-section">
            {BiggerCards}
        </section>
    )
}