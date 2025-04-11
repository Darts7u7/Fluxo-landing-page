// Features
export const allFeaturesQuery = `*[_type == "feature"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  order
}`

// FAQs
export const allFaqsQuery = `*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  category,
  order,
  isActive
}`

// Blog Posts
export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage {
    ...,
    "url": asset->url
  },
  "imageUrl": mainImage.asset->url,
  publishedAt,
  "author": author->{name, "image": image.asset->url},
  "categories": categories[]->title
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  mainImage {
    ...,
    "url": asset->url
  },
  "imageUrl": mainImage.asset->url,
  body,
  publishedAt,
  "author": author->{name, "image": image.asset->url, bio},
  "categories": categories[]->title
}`

// Single post with related posts
export const postWithRelatedQuery = `{
  "post": *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      ...,
      "url": asset->url
    },
    "imageUrl": mainImage.asset->url,
    body,
    publishedAt,
    "author": author->{name, "image": image.asset->url, bio},
    "categories": categories[]->title
  },
  "related": *[_type == "post" && slug.current != $slug && count(categories[@._ref in *[_type=="post" && slug.current==$slug][0].categories[]._ref]) > 0] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      ...,
      "url": asset->url
    },
    "imageUrl": mainImage.asset->url,
    excerpt,
    publishedAt
  }
}`