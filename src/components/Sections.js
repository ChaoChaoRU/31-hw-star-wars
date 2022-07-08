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

const Sections = () => {
    return (
        <div>
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
        </div>
    )
}

export default Sections;