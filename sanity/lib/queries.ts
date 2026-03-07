// All published posts, ordered newest first
export const postsQuery = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage { asset, alt },
    "categories": categories[]->{ _id, title },
    "author": author->{ name, image }
  }
`;

// Single post by slug
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage { asset, alt },
    body,
    "categories": categories[]->{ _id, title },
    "author": author->{ name, image }
  }
`;

// All slugs — used for generateStaticParams
export const postSlugsQuery = `
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`;
