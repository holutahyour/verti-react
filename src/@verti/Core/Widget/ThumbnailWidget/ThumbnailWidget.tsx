import React from 'react'

function ThumbnailWidget() {
  return (
    <section className="widget thumbnails">
        <h3>Interesting stuff</h3>
        <div className="grid">
            <div className="row gtr-50">
                <div className="col-6"><a href="/" className="image fit"><img src="assets/images/pic04.jpg" alt="" /></a></div>
                <div className="col-6"><a href="/" className="image fit"><img src="assets/images/pic05.jpg" alt="" /></a></div>
                <div className="col-6"><a href="/" className="image fit"><img src="assets/images/pic06.jpg" alt="" /></a></div>
                <div className="col-6"><a href="/" className="image fit"><img src="assets/images/pic07.jpg" alt="" /></a></div>
            </div>
        </div>
        <a href="/" className="button icon fa-file-alt">More</a>
    </section>
  )
}

export default ThumbnailWidget