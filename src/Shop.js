import React from 'react'
import "./Shop.css"
import ShopItem from './ShopItem'

function Shop() {
    return (
        <div className='shop'>
            <div className="shop--items">
                <div className="shop--header">
                    <h1>Our Shop</h1>
                    <p>These are some of our exclusive hand drawn products that will optimise your learning by providing outlines of concepts in a visual way.</p>
                </div>
                <ShopItem hexcol="#FF10F0" access__link="" price="40" shopitem__image="/PlasmaMembrane.jpeg" idItem="01: $40" product="Biology VCE Units 3 and 4 Notes" desc="An intuitive summary of key concpets of the course with beutifully drawn pictures that allow for a clear visualisation of the biological concepts at hand; for people that prefer understanding and going deeper over rote learning."/>
                <ShopItem hexcol="#FF5F1F" access__link="" price="15" direction="row-reverse" shopitem__image="/AdaptiveBio.jpeg" idItem="02: $15" product="Adaptive Immune System Poster" desc="A colourful A3 sized poster that was hand drawn and designed and provides a detailed description and visualisation of the complex defenses of the specific human immune system that give you long lasting immunoloigcal memory to pathogens. Great for VCE sutdents that like hanging posters up in their room to refer back to as a study method. "/>
                <ShopItem hexcol="#70B59A" access__link="" price="10" shopitem__image="/PhysicsCheatSheet.jpeg" idItem="03: $10" product="Unit 2 Physics Motion Cheat Sheet" desc="This is an A4 digital copy of the VCE unit 2 motion cheat that I hand drawn for a great point of knowledge that you can refer back to in your exam and SACs for unit 2. It provides you with graphic drawings of tricky motion concepts such as equilibrium, forces in two dimensions, energy transformations and all equations with their units and description of what information and values that should be substituted into them. "/>
                <ShopItem hexcol="#D30085" access__link="" price="20" direction="row-reverse" shopitem__image="/PhysicsU1.jpeg" idItem="04: $20" product="Unit 1 physics notes" desc="These set of notes cover some of the more difficult concepts of unit 1 physics that many students struggle to understand and fully grasp. These areas include subatomic particles and their corresponding decay equations and electricity formulas and how they work including the doppler effect and Hubble’s observations on the universes expansion and age (which can all be clipped to create a cheat sheet that suits your personal needs). These topics are all illustrated with colourful pictures and flowcharts so that they can be easily used as a reference point and allow you to build more understanding on what the bigger picture is through visualisation."/>
                <ShopItem hexcol="#00A9D3" access__link="" price="10" shopitem__image="/MethodologyDiagram.jpeg" idItem="05: $10" product="Chemistry EPI" desc="An EPI that I submitted and was graded 100% on the discussion. It has all the key aspects that make up a scientific methodology, discussion and conclusion to a high scoring VCE level practical investigation."/>
                <ShopItem hexcol="#FF5B59" access__link="" price="5" direction="row-reverse" shopitem__image="/OriginsOfAtoms.jpeg" idItem="06: $5" product="Chemistry Unit 1 research project" desc="An EPI that I submitted and was graded 100% on the discussion. It has all the key aspects that make up a scientific methodology, discussion and conclusion to a high scoring VCE level practical investigation."/>
           </div>
        </div>
    )
}

export default Shop