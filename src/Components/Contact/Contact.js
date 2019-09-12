import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import contacto from './../../Assets/img/LogotipoOficial.svg';
import './../../Style/Contact.css';
class Contact extends Component {
  render() {
    return (
      <div className="container-fluid contact-margin-top" id="Contact">
        <div className="col-md-12 contact">
          <Image src={contacto} className="contact" />
        </div>
        <div className="row">
          <span className="contact-texto texto"> Think Big <span className="contact-pink texto">Pink</span><span className="parpadea">&#124;</span></span>
        </div>
        <p className="contact-texto-parrafo texto">Let´s do business together; We´d love to hear &#91;and <i>develop</i>&#93; your ideas.</p>
        <p className="contact-texto-parrafo texto"> &nbsp; &nbsp; You can write to our contact email &#60;<a href ="mailto:hi@girasolo.com"  className="contact-blue texto"><i> hi@girasolo.com</i> </a> &#62;, you can send us a whatsapp: &#60; <a href="tel:352 125 4523" className="contact-blue texto"><i>+52 352 125 4523 </i></a> &#62;</p>
        <p className="contact-texto-parrafos texto"> or give us a call.</p>
        <p className="contact-texto-parrafosp texto">Visit us, we are located in: &#60; <a href="http://www.pacueco.com/" className="contact-blue texto"> <i> Pacueco Gto Mx. </i></a> &#62; </p>
        <p className="contact-texto-parrafo texto">One last thing: please don&#180;t forget to visit our Social Networks: &#60;&#34; <a href="https://www.instagram.com/girasoloagencia/" className="contact-pink"><i>Instagram </i></a>&#34; &#62;, &#60; &#34; <a href="https://www.facebook.com/girasolo/" className="contact-pink texto"><i>Facebook </i></a> &#34; &#62;, &#60; &#34; <a href="https://twitter.com/girasoloagencia?lang=es" className="contact-pink texto"><i>Twitter </i></a> &#34;&#62;, or
read our &#60; &#34;<a href="https://girasolo.home.blog/" className="contact-pink texto"><i> Blog</i> </a> &#34; &#62;. </p>
        <p className="contact-texto-parrafo texto">&#60; &#34; <a href="http://www.girasolo.mx/" className="contact-pink texto"><i>Se habla español</i></a> &#34;&#62;</p>
      </div>
    );
  }
}
export default Contact;
