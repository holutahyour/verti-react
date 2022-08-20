import React from 'react'

function Banner() {
  return (
    <div id="banner-wrapper">
        <div id="banner" className="box container">
            <div className="row">
                <div className="col-7 col-12-medium">
                    <h2>Hi. This is Verti.</h2>
                    <p>It's a free responsive site template by HTML5 UP</p>
                </div>
                <div className="col-5 col-12-medium">
                    <ul>
                        <li><a href="void()" className="button large icon solid fa-arrow-circle-right">Ok let's go</a></li>
                        <li><a href="void()" className="button alt large icon solid fa-question-circle">More info</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner