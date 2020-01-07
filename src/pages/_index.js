import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from '../components/PostItem'

const IndexPage = () => {
  const query = graphql`query { 
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC}) {
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
  const { allMarkdownRemark } = useStaticQuery(query)
  const postList = allMarkdownRemark.edges
  
  return (
    <Layout>
      <SEO title="Home" />
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

export default IndexPage
