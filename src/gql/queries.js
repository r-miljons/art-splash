import { gql } from "@apollo/client";

export default {
  GET_FEATURED: gql`
  query {
    allFeatured {
      product {
        _id,
        name,
        descriptionRaw,
        price,
        picture {
          asset {
            url
          }
        },
        slug {
          current
        },
        category {
          slug {
            current
          }
        }
      }
    }
  }
  `,
  GET_CATEGORIES: gql`
  query {
    allCategory {
      _id,
      title,
      descriptionRaw,
      picture {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
  `,
  GET_CATEGORY: gql`
  query getCategory($id: ID!) {
    Category(_id: $id) {
      _id,
      title,
      descriptionRaw,
      picture {
        asset {
          url
        }
      }
      slug {
        current
      }
    }
  }
  `,
  GET_ARTISTS: gql`
  query {
    allArtist {
      _id,
      name,
      descriptionRaw,
      picture {
        asset {
          url
        }
      }
    }
  }
  `,
  GET_ARTIST: gql`
  query($id: ID!) {
    Artist(id: $id) {
      _id,
      name,
      descriptionRaw,
      picture {
        asset {
          url
        }
      },
      background {
        asset {
          url
        }
      }
    }
  }
  `,
  GET_PRODUCTS : gql`
  query {
    allProduct {
      _id,
      name,
      author {
        _id
      },
      slug {
        current
      },
      descriptionRaw,
      picture {
        asset {
          url
        }
      },
      price,
      category {
        _id,
        slug {
          current
        }
      }
    }
  }
  `,
  GET_PRODUCT : gql`
  query($id: ID!) {
    Product(id: $id) {
      name,
      slug {
        current
      },
      descriptionRaw,
      picture {
        asset {
          url
        }
      },
      price,
      category {
        slug {
          current
        }
      }
    }
  }
  `,
}