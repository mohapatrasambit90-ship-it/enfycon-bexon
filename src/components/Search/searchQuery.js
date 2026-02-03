export const SEARCH_POSTS_QUERY = `
  query SearchPosts($term: String!, $after: String) {
    posts(where: { search: $term }, first: 5, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        uri
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
