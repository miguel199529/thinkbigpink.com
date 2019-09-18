import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import contacto from './../../Assets/img/LogotipoOficial.svg';
import './../../Style/Contact.css';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';
class Contact extends Component {
  render() {
    let  traductor  = this.props.t;
    return (
      <div className="container-fluid contact-margin-top" id="Contact">
        <div className="col-md-12 contact">
          <Image src={contacto} className="contact" />
        </div>
        <div className="row">
          <span className="contact-texto texto"> Think Big <span className="contact-pink texto">Pink</span><span className="parpadea">&#124;</span></span>
        </div>
        <p className="contact-texto-parrafo texto">{traductor('contactparrafo1')}</p>
        <p className="contact-texto-parrafo texto"> &nbsp;&nbsp; {traductor('contactparrafo2')} &#60;<a href ="mailto:hi@girasolo.com"  className="contact-blue texto"><i>hi@girasolo.com</i></a>&#62; {traductor('contactparrafolink')} &#60;<a href="tel:352 125 4523" className="contact-blue texto"><i>+52 352 125 4523</i></a>&#62;</p>
        <p className="contact-texto-parrafos texto"> {traductor('contactparrafo')} &#60;<a href="https://goo.gl/maps/cmsBzTr8G24FqUnDA" className="contact-blue texto" target="blank"><i>Pacueco Gto Mx.</i></a>&#62; </p>
        <p className="contact-texto-parrafo texto">{traductor('redes')}&#60;&#34;<a href="https://www.instagram.com/girasoloagencia/" className="contact-pink" target="blank"><i>Instagram</i></a>&#34;&#62;,&#60;&#34;<a href="https://www.facebook.com/girasolo/" className="contact-pink texto" target="blank"><i>Facebook</i></a>&#34;&#62;,&#60;&#34;<a href="https://twitter.com/girasoloagencia?lang=es" className="contact-pink texto" target="blank"><i>Twitter</i></a>&#34;&#62;,{traductor('blog')}&#60;&#34;<a href="https://girasolo.home.blog/" className="contact-pink texto" target="blank"><i>Blog</i></a>&#34;&#62;.</p>
        <p className="contact-texto-parrafo texto">&#60;&#34;<a href="/es" className="contact-pink texto"><i>{traductor('translate')}</i></a>&#34;&#62;</p>
      </div>
    );
  }
}
Contact.propTypes={
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  contactparrafo1: PropTypes.string,
  contactparrafo2: PropTypes.string,
  contactparrafolink: PropTypes.string,
  contactparrafo: PropTypes.string,
  contactvisit: PropTypes.string,
  redes: PropTypes.string,
  blog: PropTypes.string,
  translate: PropTypes.string
};
export default translate('contact')(Contact);
