import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

const ListePage = () => (
        <StaticQuery
          query={graphql`
            query RecentPostsQuery {
                allWordpressPage {
                    edges {
                        node {
                            id
                            title
                            excerpt
                            date
                            author {
                                avatar_urls {
                                    wordpress_48
                                }
                                name
                                slug
                                wordpress_id
                            }
                            slug
                            title
                            wordpress_id
                            modified
                            content
                        }
                    }
                }
            }
          `}
    
          render={data => {
            return (
                <div className="recent-posts row" style={{
                  
                }}>
               
                    {
                        data.allWordpressPage.edges.map(post => (
                            <div className="rp-card col-sm-3" key={post.node.id} style={{
                               

                            }}>
                             
                                <div className="text-group" style={{
                                   
                                }}>
     <Link to={post.node.slug}>
            <p>{post.node.title}</p>
          </Link>
    
                                   
                                    <small className="post-date" style={{
                                        color: `grey`,
                                        textTransform: `uppercase`,
                                    }}>{ new Date(post.node.date).toDateString() }</small>
                                </div>
                            </div>
                          ))
                    }
                </div>
            )
          }}
        />
)

export default ListePage