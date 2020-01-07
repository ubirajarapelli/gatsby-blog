import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #8899a6;
`
export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: #8899a6;
  transition: color .5s;

  &:hover {
    color: #1fa1f2;
  }
`
export const ProfileAuthor = styled.h1`
  margin: 0.5rem auto 1.5rem;
  font-size: 1.6rem;
`
export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`
export const ProfileDescription = styled.p`
  line-height: 1.4;
  font-size: 1rem;
  font-weight: 300;
`
