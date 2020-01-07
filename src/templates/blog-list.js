import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from '../components/PostItem'

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="" />
        {postList.map(({ 
          node: { 
            fields: { slug },
            frontmatter: { title, category, date, description, background },
            timeToRead            
            }
          }) => (
          <PostItem 
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            background={background}
          />
          )
        )}
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title 
            category 
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY") 
            description 
            background
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }`

export default BlogList
