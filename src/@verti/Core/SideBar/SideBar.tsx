import React from 'react'

function SideBar() {
  return (
    <div id="sidebar">
        <section className="widget thumbnails">
            <h3>Interesting stuff</h3>
            <div className="grid">
                <div className="row gtr-50">
                    <div className="col-6"><a href="void()" className="image fit"><img src="/public/asset/images/pic04.jpg" alt="" /></a></div>
                    <div className="col-6"><a href="void()" className="image fit"><img src="/public/asset/images/pic05.jpg" alt="" /></a></div>
                    <div className="col-6"><a href="void()" className="image fit"><img src="/public/asset/images/pic06.jpg" alt="" /></a></div>
                    <div className="col-6"><a href="void()" className="image fit"><img src="/public/asset/images/pic07.jpg" alt="" /></a></div>
                </div>
            </div>
            <a href="void()" className="button icon fa-file-alt">More</a>
        </section>
    </div>
  )
}

export default SideBar