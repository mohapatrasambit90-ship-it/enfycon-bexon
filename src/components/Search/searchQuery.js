export const SEARCH_POSTS_QUERY = `
  query SearchPosts($term: String!) {
    posts(where: { search: $term }, first: 10) {
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
