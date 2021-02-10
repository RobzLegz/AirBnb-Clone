import React from 'react';
import Banner from './Banner';
import Card from './Card';
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <h1 className="homeHeading">Live anywhere</h1>
            <div className="homeSection">
                <Card
                    source="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480"
                    title="Entire homes"
                    
                />
                <Card
                    source="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=480"
                    title="Cabins and cottages"
                    
                />
                <Card
                    source="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480"
                    title="Unique stays"
                    
                />
                <Card
                    source="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=480"
                    title="Pets welcome"
                    
                />
            </div>
            <div className="homeSection">
                <Card
                    source="https://a0.muscache.com/im/pictures/2c34782d-bd8e-48c3-bdf1-335eb9118b22.jpg?aki_policy=xx_large"
                    title="Designer Studio Apartment in Central London"
                    price={90}
                />
                <Card
                    source="https://a0.muscache.com/im/pictures/14d28ae6-67ea-47de-af49-552aacd17f3b.jpg?im_w=720"
                    title="The Hux Hotel, a 4 Star Boutique, Petite Double"
                    price={57}
                    description="The Hux, a sexy and seductive 4 Star hotel with decor you will never forget. Check-in and discover its funky secrets."
                />
                <Card
                    source="https://a0.muscache.com/im/pictures/43fc0482-bed9-470d-ac39-22af6a1c491a.jpg?im_w=1200"
                    title="Modern Cozy Loft Studio in Quiet center of Riga."
                    description="A beautiful Loft Style apartment in renovated house in the center of Riga. The apartment is light and airy, with good planning. Fully furnished and equipped with all necessary stuff."
                    price={29}
                />
            </div>
            <div className="homeSection">
                <Card
                    source="https://a0.muscache.com/im/pictures/c3714c4d-3bd5-43f9-bd16-3e950c55c51d.jpg?im_w=1200"
                    title="5 min to Old city/1-4 person/Fireplace/50″TV/70m²"
                    price={39}
                    description="70 sq.m underground apartment in the very center of Riga with a separate entrance! The atmosphere of the ancient city and all the benefits of the 21st century"
                />
                <Card
                    source="https://a0.muscache.com/im/pictures/70af32d5-da5c-4d8b-9899-a50a192a0e55.jpg?im_w=1200"
                    title="Central Penthouse with Terrace"
                    price={35}
                    description="Spacious and airy penthouse with a terrace in a beautiful park area close to Old city. Congress Centre is 1.4 km, while Riga Airport is 9.7 km away from the property."
                />
                <Card
                    source="https://a0.muscache.com/im/pictures/miso/Hosting-43713758/original/d3668e07-ab06-4e9d-8c56-2eb5f4a83c56.jpeg?im_w=1200"
                    title="Beach and forest front apartment in Dzintari"
                    description="Perfect Forestview Apartment just 150m from the beach. The apartment is based in a renovated Latvian brick house in the charming district of Dzintaru avenue."
                    price={37}
                />
            </div>
        </div>
    )
}

export default Home
