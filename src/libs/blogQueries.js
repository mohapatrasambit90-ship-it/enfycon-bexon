const GET_POSTS_QUERY = `
  query GetPosts($first: Int!, $after: String, $categoryName: String) {
    posts(
      first: $first
      after: $after
      where: { 
        orderby: { field: DATE, order: DESC }
        categoryName: $categoryName
      }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              slug
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const GET_LATEST_POST_QUERY = `
  query GetLatestPost {
    posts(first: 1, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            slug
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }

      }
    }
  }
`;

export default GET_POSTS_QUERY;
