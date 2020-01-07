import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
  right: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 3.75rem;
  height: 100vh;
  padding: .8rem 0;
  border-left: 1px solid #38444d;
  background: #192734;
`
export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuBarLink = styled(Link)`
  display: block;
`
export const MenuBarItem = styled.span`
  position: relative;
  display: block;
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem;
  color: #8899a6;
  cursor: pointer;
`
