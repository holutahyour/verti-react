import React from 'react'
import Banner from '../../../@verti/Core/Banner/Banner'
import Feature from '../../../@verti/Core/Feature/Feature'
import Footer from '../../../@verti/Core/Footer/Footer'
import Header from '../../../@verti/Core/Header/Header'
import Main from '../../../@verti/Core/Main/Main'
import MainContent from '../../../@verti/Core/MainContent/MainContent'
import SideBar from '../../../@verti/Core/SideBar/SideBar'
import ThumbnailWidget from '../../../@verti/Core/Widget/ThumbnailWidget/ThumbnailWidget'

function Home() {
  return (
    <div id='page-wrapper'>
      <Header />
      <Banner />
      <Feature />
      <Main>
        <div className="col-4 col-12-medium">
            <SideBar>
              <ThumbnailWidget />
            </SideBar>
        </div>
        <div className="col-8 col-12-medium imp-medium">
          <MainContent />
        </div>
      </Main>
      <Footer />
    </div>
  )
}

export default Home