import React, {Component} from 'react';

import {Container, Row, Col, Image} from 'react-bootstrap';
import Naveg from './../components/Naveg';
import './../Assets/fonts/Hack-Regular.ttf';
//importar imagenes
import Imagen from './../Assets/2Puntos.svg';
import BigPink from './../Assets/LogotipoOficial.svg';
import './../Style/home.css';

class About extends Component{

    render(){
        return (
<Container>
<Naveg></Naveg>
<Col md={4}>We develop colorful
strategies to help
brands live succesfully
in a digital world. |
 // We were born within a branding
company, therefore, we like things,
attractive, colorful, well executed,
we can't avoid it is inside our DNA.
We work with projects that include:
development, design and multimedia;
we collaborate every day with teams
from different disciplines that also
provide different perspectives.
We have completed projects for
different industries, from the health
sector to the government, from Mexico
to Japan, connecting user needs with
business objectives.
Think BIG, Think BigPink
.</Col>
<Col md={8}>sm=8</Col>

</Container>
        );
    }
}


export default About;