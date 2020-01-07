import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
  const query = graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `
  const { avatarImage } = useStaticQuery(query)
  return (
    <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
  )
}

export default Avatar
