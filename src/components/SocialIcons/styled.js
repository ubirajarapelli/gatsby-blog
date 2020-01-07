import styled from 'styled-components'

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  margin: 0 auto;
`
export const SocialLinksList = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`
export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  text-decoration: none;
  color: #8899a6;
  transition: color .5s;

  &:hover {
    color: #1fa1f2
  }
`
export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  fill: #bbb;
`
