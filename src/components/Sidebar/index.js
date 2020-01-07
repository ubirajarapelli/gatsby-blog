import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialIcons'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
