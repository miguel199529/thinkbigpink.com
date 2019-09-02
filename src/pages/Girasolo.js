import React, { Component } from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';

import { Navbar } from 'react-bootstrap';
import './../Style/girasolo.css';
import Imagenfondo from './../Assets/OndasPaginaGirasolo.svg';
import Imagenfondo1 from './../Assets/PuntosGirasoloDesktop.svg';


class girasolo extends Component {
  render() {
    return (

      <Container-fluid>

        <div className="fondo">

        <div className="row">

    <div className="col-md-4 giras texto">
    GIRASOLO |

    </div>
    <div className="col-md-4">


    </div>
    <div className="col-md-4">


    </div>

        </div>
<div className="row">
<div className="col-md-4">
<p className="texto giras1">We
Ut are
laoreet
dolore younger
magna aliquam
brother,
an agency
specialized
in
erat
volutpat.
Ut wisi
enim ad mini.
visual communication and digital
marketing.
We team up with them to make
functional and lovely projects.
Check them out at:</p>
</div>
<div className="col-md-4">
</div>
<div className="col-md-4">
</div>
</div>
          <Image src={Imagenfondo} className="fondo" />

        </div>

        <div className="divfondo">
          <Image src={Imagenfondo1} className="fondo" />
        </div>



      </Container-fluid>


    );
  }
}
export default girasolo;
