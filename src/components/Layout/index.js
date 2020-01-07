import React from 'react'
import PropTypes from 'prop-types'
import CreateGlobalStyle from '../../styles/global'
import Sidebar from  '../Sidebar'
import MenuBar from '../MenuBar'

import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <CreateGlobalStyle />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
