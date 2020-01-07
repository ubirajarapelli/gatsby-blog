import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #38444d;
`
export const PostItemLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #8899a6;

  &:hover {
    color: #1fa1f2
  }
`
export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`
export const PostItemTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  min-height: 90px;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 50%;
  color: #fff;
  background-color: ${props => props.background ? props.background : '#1fa1f2'};
`
export const PostItemDate = styled.time`
 font-size: .9rem;
`
export const PostItemTitle = styled.h1`
  margin: .2rem 0 .5rem;
  font-size: 1.6rem;
  font-weight: 700;
`
export const PostItemDescription = styled.p`
  line-height: 1.2;
  font-size: 1.2rem;
  font-weight: 300; 
` 
