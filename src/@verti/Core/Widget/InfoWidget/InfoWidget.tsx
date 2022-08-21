import React from 'react'

function InfoWidget() {
  return (
    <>
    <section>
        <h3>Subheading</h3>
        <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
        Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
        Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
        consequat etiam.</p>
        <footer>
            <a href="/" className="button icon solid fa-info-circle">Find out more</a>
        </footer>
    </section>

    <section>
        <h3>Subheading</h3>
        <ul className="style2">
            <li><a href="/">Amet turpis, feugiat et sit amet</a></li>
            <li><a href="/">Ornare in hendrerit in lectus</a></li>
            <li><a href="/">Semper mod quis eget mi dolore</a></li>
            <li><a href="/">Quam turpis feugiat sit dolor</a></li>
            <li><a href="/">Amet ornare in hendrerit in lectus</a></li>
            <li><a href="/">Semper mod quisturpis nisi</a></li>
        </ul>
    </section>
    </>
  )
}

export default InfoWidget