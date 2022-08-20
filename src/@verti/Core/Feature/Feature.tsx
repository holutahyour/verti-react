import React from 'react'
import Box from '../Box/Box'

function Feature() {
  return (
    <div id="features-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-4 col-12-medium">
                                <Box
                                    imageUrl='/public/assets/images/pic01.jpg'
                                    heading='Put something here'
                                    caption='Maybe here as well I think'
                                    body='Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla.'
                                    />
							</div>
							<div className="col-4 col-12-medium">
                                <Box
                                    imageUrl='/public/assets/images/pic02.jpg'
                                    heading='An interesting title'
                                    caption='This is also an interesting subtitle'
                                    body='Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla.'
                                    />
							</div>
							<div className="col-4 col-12-medium">
                                <Box
                                    imageUrl='/public/assets/images/pic03.jpg'
                                    heading='Oh, and finally ...'
                                    caption="Here's another intriguing subtitle"
                                    body='Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla.'
                                    />
							</div>
						</div>
					</div>
				</div>
  )
}

export default Feature