import React, { Component } from 'react';


import { Container, Row, Image, Col } from 'react-bootstrap';

import ima from './../Assets/LogotipoOficial.svg';
import './../Assets/fonts/Hack-Regular.ttf';
import './../Style/about.css';
import { Link } from 'react-bootstrap';
import Imagens from './../Assets/im.png';
class about extends Component {
  render() {
    return (
      <div>

        <div className="container-fluid">
          <div className="row non non2">
            <div className="col-md-5 backg tabim4 non non2">
              <p className="p1 texto textabout tabim4 non">
                We develop colorful
                strategies to help
                 brands live succesfully
                  in a digital world. |
                  </p>

              <p className="p3 texto textabout2 tabim4 non non2"> //We were born within a branding
                company, therefore, we like things,
                attractive, colorful, well executed,
                we can't avoid it is inside our DNA.
                We work with projects that include:
                development, design and multimedia;
                we collaborate every day with teams
                from different disciplines that also
                provide different perspectives.</p>
              <p className="p3 texto textabout2 tabim4 non non2">
                We have completed projects for
                different industries, from the health
                sector to the government, from Mexico
                to Japan, connecting user needs with
                business objectives.
                  </p>

              <p className="texto p3 textabout2 tabim4 non non2">
                Think BIG, <a href="#" className="think texto p3 textabout2 tabim4 non non2">Think BigPink.</a> </p>

            </div>
            <div className="col-md-7 backg2 tabim4">
              <Image
                src={Imagens}
                className="ims p4 non non2"

              />
            </div>

          </div>

          <div class="row">



            <p className="p3 texto textabout2 textabout3 tabim4 non non2"> //We were born within a branding
              company, therefore, we like things,
              attractive, colorful, well executed,
              we can't avoid it is inside our DNA.
              We work with projects that include:
              development, design and multimedia;
              we collaborate every day with teams
              from different disciplines that also
                provide different perspectives.</p>
            <p className="p3 texto textabout2 non non2">
              We have completed projects for
              different industries, from the health
              sector to the government, from Mexico
              to Japan, connecting user needs with
              business objectives.
                  </p>





          </div>
          <div class="row">

            <p className="p1 texto textabout tab1 non non3text">
              We develop colorful
              strategies to help
               brands live succesfully
                in a digital world. |
                  </p>

          </div>
          <div className="row center">

            <Image
              src={Imagens}
              className="ims p4 tabim non"

            />

          </div>

          <div class="row">

            <p className="p3 texto tab2 non non2text"> //We were born within a branding
              company, therefore, we like things,
              attractive, colorful, well executed,
              we can't avoid it is inside our DNA.
              We work with projects that include:
              development, design and multimedia;
              we collaborate every day with teams
              from different disciplines that also
                provide different perspectives.</p>
            <p className="p3 texto textabout2 non non2text ">
              We have completed projects for
              different industries, from the health
              sector to the government, from Mexico
              to Japan, connecting user needs with
              business objectives.
                  </p>

          </div>



          <div className="row rows center">
            <div className="col-md-5 non1 non2 ">
              <p className="p1 texto non1 p5">
                We develop colorful
                strategies to help
                 brands live succesfully
                  in a digital world. |
                  </p>

              <p className="p3 texto non1 non2"> //We were born within a branding
                company, therefore, we like things,
                attractive, colorful, well executed,
                we can't avoid it is inside our DNA.
                We work with projects that include:
                development, design and multimedia;
                we collaborate every day with teams
                from different disciplines that also
                provide different perspectives.</p>
              <p className="p3 texto non1 non2text">
                We have completed projects for
                different industries, from the health
                sector to the government, from Mexico
                to Japan, connecting user needs with
                business objectives.
                  </p>

              <p className="texto p3 non1 non2text">
                Think BIG, <a href="#" className="think texto p3 non1 non2">Think BigPink.</a> </p>

            </div>
            <div className="col-md-7">
              <Image
                src={Imagens}
                className="ims p4 non1 non2"

              />
            </div>

          </div>























        </div>




      </div>

    );
  }
}





export default about;
