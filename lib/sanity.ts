import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '75q7mk6w',
  dataset: 'production',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: '2024-01-01', // Use current date (YYYY-MM-DD) to target the latest API version
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const blogPostsQuery = `*[_type == "blogPost" && isPublished == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  featuredImage,
  tags
}`

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug && isPublished == true][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  featuredImage,
  content,
  tags
}`

// Types
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  excerpt: string
  featuredImage?: any
  content?: any[]
  tags?: string[]
} 