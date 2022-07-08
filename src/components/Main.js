import React from 'react';
import Luke from '../Images/main.jpg';
import R2D2 from '../Images/friend1.jpg';
import C3PO from '../Images/friend2.jpg';
import LittleFriend from '../Images/friend3.jpg';
import Chui from '../Images/friend4.jpg';
import Solo from '../Images/friend5.jpg';
import Leia from '../Images/friend6.jpg';
import Falcon from '../Images/friend7.jpg';
import Kenobi from '../Images/friend8.jpg';
import Yoda from '../Images/friend9.jpg';

class Main extends React.Component {
    render() {
        return (
            <main class="clearfix">
        <section class="float-start me-3 w-25">
            <img class="w-100" src={Luke} alt="Luke Skywalker"/>
        </section>
        <section class="float-end mx-1 w-50 row border">
            <h2 class="col-12 text-center">Dream Team</h2>
                <img class="col-4 p-1" src={R2D2} alt="friend"/>
                <img class="col-4 p-1" src={C3PO} alt="friend"/>
                <img class="col-4 p-1" src={LittleFriend} alt="friend"/>          
                <img class="col-4 p-1" src={Chui} alt="friend"/>
                <img class="col-4 p-1" src={Solo} alt="friend"/>
                <img class="col-4 p-1" src={Leia} alt="friend"/>
                <img class="col-4 p-1 bottomLeft" src={Falcon} alt="friend"/>
                <img class="col-4 p-1" src={Kenobi} alt="friend"/>
                <img class="col-4 p-1 bottomRight" src={Yoda} alt="friend"/>
        </section>
        <p class="farGalaxy">It is a period of civil war.
            Rebel spaceships, striking
            from a hidden base, have won
            their first victory against
            the evil Galactic Empire.

            During the battle, Rebel
            spies managed to steal secret
            plans to the Empire's
            ultimate weapon, the DEATH
            STAR, an armored space
            station with enough power
            to destroy an entire planet.

            Pursued by the Empire's
            sinister agents, Princess
            Leia races home aboard her
            starship, custodian of the
            stolen plans that can save her
            people and restore
            freedom to the galaxy....</p>
    </main>
        )
    }
}

export default Main;