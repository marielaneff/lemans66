import React from "react"

import { graphql } from "gatsby"
export default ({ data }) => {
  const post = data.allWordpressPage.edges[0].node
  console.log(post)
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
