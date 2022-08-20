import React from 'react'

interface IBox{
    imageUrl: string,
    heading: string,
    caption: string,
    body: string,
    imageAlt?: string
}

function Box({imageUrl,heading,caption,body,imageAlt = ''}:IBox) {
  return (
    <section className="box feature">
        <a href="void()" className="image featured"><img src={imageUrl} alt={imageAlt} /></a>
        <div className="inner">
            <header>
                <h2>{heading}</h2>
                <p>{caption}</p>
            </header>
            <p>{body}</p>
        </div>
    </section>
  )
}

export default Box