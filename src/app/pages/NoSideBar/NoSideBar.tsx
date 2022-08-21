import React from 'react'
import Content from '../../../@verti/Core/Content/Content'
import Footer from '../../../@verti/Core/Footer/Footer'
import Header from '../../../@verti/Core/Header/Header'
import Main from '../../../@verti/Core/Main/Main'

function NoSideBar() {
  return (
    <div id='page-wrapper'>
      <Header />
      <Main>
          <Content title={'No Sidebar'} />
       </Main>
      <Footer />
    </div>
  )
}

export default NoSideBar