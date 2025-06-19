import Image from "next/image";
import Link from "next/link";
import { Kanit } from 'next/font/google';
import { FiArrowLeft } from "react-icons/fi";
import { PortableText } from '@portabletext/react';
import { client, blogPostQuery, blogPostsQuery, urlFor, BlogPost } from '../../../lib/sanity';

const kanit = Kanit({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

// Portable Text components for rich content rendering
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ''}
          width={800}
          height={400}
          className="rounded-lg w-full h-auto"
        />
      </div>
    ),
    code: ({ value }: any) => (
      <div className="my-6">
        {value.filename && (
          <div className="bg-gray-700 px-4 py-2 rounded-t-lg">
            <span className="text-gray-300 text-sm font-mono">{value.filename}</span>
          </div>
        )}
        <pre className={`bg-gray-800 p-4 ${value.filename ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto`}>
          <code className="text-sm text-gray-100">{value.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className={`${kanit.className} text-4xl font-bold text-white my-6`}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className={`${kanit.className} text-3xl font-bold text-white my-5`}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className={`${kanit.className} text-2xl font-bold text-white my-4`}>
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className={`${kanit.className} text-xl font-bold text-white my-3`}>
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 text-base leading-7 my-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 my-6 italic text-gray-400">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-200">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-800 px-2 py-1 rounded text-sm text-gray-100">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside text-gray-300 my-4 space-y-2">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-gray-300">{children}</li>,
  },
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await client.fetch(blogPostsQuery);
    return posts.map((post: BlogPost) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch post data with revalidation for dynamic updates
  let post: BlogPost | null = null;
  
  try {
    post = await client.fetch(blogPostQuery, { 
      slug: params.slug 
    });
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) {
    return (
      <main className="flex lg:w-3/5 mx-auto flex-col items-center lg:my-36 w-5/6 my-20 lg:p-2 mx-auto gap-y-10 rounded-lg">
        <div className="flex items-center gap-4 mb-6 w-full">
          <Link href="/blogs" className="text-white hover:text-gray-300 transition-colors">
            <FiArrowLeft className="text-2xl" />
          </Link>
          <h1 className={kanit.className} style={{ fontSize: '32px', color: "#D4D4D4" }}>
            Blog Post Not Found
          </h1>
        </div>
        <div className="text-center">
          <p className="text-gray-400 mb-4">The blog post you&apos;re looking for does not exist.</p>
          <Link 
            href="/blogs" 
            className="px-6 py-2 border border-gray-500 rounded-lg text-white hover:bg-gray-800 transition-colors duration-300"
          >
            Back to Blog Posts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex lg:w-3/5 mx-auto flex-col items-center lg:my-36 w-5/6 my-20 lg:p-2 mx-auto gap-y-10 rounded-lg fade-in">
      {/* Header Section */}
      <section className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-6">
          <Link href="/blogs" className="text-white hover:text-gray-300 transition-colors mb-4 md:mb-0">
            <FiArrowLeft className="text-2xl" />
          </Link>
          <div className="flex flex-col">
            <h1 className={kanit.className} style={{ fontSize: '36px', color: "#D4D4D4" }}>
              {post.title}
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="w-full mb-8">
            <Image
              src={urlFor(post.featuredImage).url()}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        )}

        {/* Excerpt */}
        <div className="mb-8">
          <p className="text-gray-300 text-lg leading-8 font-medium">
            {post.excerpt}
          </p>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Separator Line */}
        <div className="w-full h-px bg-gray-600 mb-2"></div>
      </section>

      {/* Blog Content */}
      <section className="w-full">
        <div className="prose prose-invert max-w-none">
          <PortableText
            value={post.content}
            components={portableTextComponents}
          />
        </div>
      </section>

      {/* Back to Blogs */}
      <section className="w-full flex justify-center mt-12">
        <Link 
          href="/blogs"
          className="px-6 py-3 border border-gray-500 rounded-lg text-white hover:bg-gray-800 transition-colors duration-300"
          style={{ color: "#D4D4D4" }}
        >
          ← Back to All Posts
        </Link>
      </section>
    </main>
  );
} 