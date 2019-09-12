import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import Imagens from './../../Assets/img/about/2.png';
import './../../Style/AboutDevelop.css';
class aboutdevelop extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid center aboutDevelop margin-tops" id="#/Develop">
          <div className="row">
            <div className="col-md-4 aboutDevelop-main aboutDevelop-main-spacing-row aboutDevelop-bordeer">
              <p className="aboutDevelop-main-spacing aboutDevelop-main-spacing-text texto">
                 We develop colorful</p>
              <div className="about-barra about-barra-display">
                <div className="row about-box-color-movil about-divs-pink">
                </div>
                <div className="row about-box-color-movil about-divs-yelow">
                </div>
                <div className="row about-box-color-movil about-divs-blue">
                </div>
                <div className="row about-box-color-movil about-divs-black">
                </div>
              </div>
              <p className="aboutDevelop-main-wedevelop texto about-divs-margins about-text ">strategies to help brands live successfully in a digital
world.<span className="parpadea"> &#124;</span></p>
              <div className="about-barra about-barra-ipad">
                <div className="row about-box-color-movil about-divs-pink">
                </div>
                <div className="row about-box-color-movil about-divs-yelow">
                </div>
                <div className="row about-box-color-movil about-divs-blue">
                </div>
                <div className="row about-box-color-movil about-divs-black">
                </div>
              </div>
              <div className="row about-row-colors">
                <div className="about-divs-colors">
                </div>
                <div className="about-divs1-colors">
                </div>
              </div>
              <Image src={Imagens}
                className="aboutDevelop-Imagen about-imagen">
              </Image>
              <div className="texto aboutDevelop-main-branding tablet">
                <div className="about-box-pink about-imgn"></div>
                <div className="about-box-blue about-imgn"></div>
                <div className="divscolores">
                </div>
                <div className="divs-amarillo"></div>
                <h2 className="aboutDevelop-main-branding-born tablet">&frasl;&frasl;We were born within a branding &nbsp; </h2>
                company; therefore, we like attractive, colorful and well executed things, we can’t avoid it, it’s inside our DNA.
                We work with projects that include: software development, design and multimedia; we collaborate every day with teams from different disciplines that also provide different perspectives.
              </div>
              <p className="texto about-main-sectors tablet">
                We have accomplished projects for different industries, from health to government sector, from Mexico to Japan, connecting user needs with business objectives.
              </p>
              <div className="divs-azul tablet"></div>
              <p className="texto about-main-sectors about-box-color-row tablet">
                Think BIG, Think BigPink.
              </p>
              <div className="row about-box-color about-imgn">
                <div className="about-box-colors-pink tablets"></div>
                <div className="about-box-colors-yellow tablets"></div>
                <div className="about-box-colors-blue tablets"></div>
                <div className="about-box-colors-black tablets"></div>
              </div>
            </div>
            <div className="txts texto">
              <div className="divscolores">
              </div>
              <div className="divs-amarillo"></div>
              <p className="texto about-main-sectors about-selector about-branding ">
              &frasl; We were born within a branding &nbsp;
              </p>
              <p className="texto about-main-sectors about-have-selector">
                We have accomplished projects for different industries, from health to government sector, from Mexico to Japan, connecting user needs with business objectives.
              </p>
              <p className="texto about-main-sectors ">
                company; therefore, we like attractive, colorful and well executed things, we can’t avoid it, it’s inside our DNA.
                We work with projects that include: software development, design and multimedia; we collaborate every day with teams from different disciplines that also provide different perspectives.</p>
              <p className="texto about-main-sectors">
                We have accomplished projects for different industries, from health to government sector, from Mexico to Japan, connecting user needs with business objectives.
              </p>
              <div className="divs-azul"></div>
              <p className="texto about-main-sectors about-bigpink">
                Think BIG, Think BigPink.
              </p>
            </div>
            <div className="col-md-8 about-main-ipad ">
              <Image src={Imagens}
                className="about-imgn about-img">
              </Image>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default aboutdevelop;

