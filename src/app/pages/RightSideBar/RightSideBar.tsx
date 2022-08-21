import React from 'react'
import Content from '../../../@verti/Core/Content/Content'
import Footer from '../../../@verti/Core/Footer/Footer'
import Header from '../../../@verti/Core/Header/Header'
import Main from '../../../@verti/Core/Main/Main'
import SideBar from '../../../@verti/Core/SideBar/SideBar'
import InfoWidget from '../../../@verti/Core/Widget/InfoWidget/InfoWidget'

function RightSideBar() {
  return (
    <div id='page-wrapper'>
      <Header />
      <Main>
          <div className="col-8 col-12-medium imp-medium">
            <Content title={'Right Sidebar'} />
          </div>
          <div className="col-4 col-12-medium">
              <SideBar>
                <InfoWidget />
              </SideBar>
          </div>
          
       </Main>
      <Footer />
    </div>
  )
}

export default RightSideBar