import React from 'react'

function ContactWidget() {
  return (
    <section className="widget contact last">
        <h3>Contact Us</h3>
        <ul>
            <li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="/" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
            <li><a href="/" className="icon brands fa-pinterest"><span className="label">Pinterest</span></a></li>
        </ul>
        <p>1234 Fictional Road<br />
        Nashville, TN 00000<br />
        (800) 555-0000</p>
    </section>
  )
}

export default ContactWidget