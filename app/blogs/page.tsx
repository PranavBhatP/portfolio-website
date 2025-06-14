'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Kanit } from 'next/font/google';
import { FiArrowLeft, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { client, blogPostsQuery, urlFor, BlogPost } from '../../lib/sanity';

const kanit = Kanit({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

// External blog data (kept as-is)
const externalBlogsData = [
  {
    id: 1,
    title: "Generate stunning images with GANs - An intro to ESRGANs",
    date: "Oct 23, 2024",
    description: "A blog documenting my hands-on experience with ESRGANs",
    topics: "DL, GAN, Image Processing",
    imageUrl: "/portfolio-website/profile.png",
    link: "https://medium.com/@pranavbhat2004/image-enhancer-website-generate-stunning-images-with-esrgans-4177c623df27"
  },
  {
    id: 2,
    title: "MultiModal Magic: Integrating Diverse Data for Smarter AI systems",
    date: "Oct 23, 2024",
    description: "A simple blog about the emerging field of Multimodal ML, demonstrating a hands on project.",
    topics: "ML, DL, PyTorch, BERT, ResNET50",
    imageUrl: "/portfolio-website/multimodal_ml.png",
    link: "https://webclub.nitk.ac.in/blogs/18"
  },
  {
    id: 3,
    title: "Documenting my ETHIndia'24 Prize Winning Project",
    date: "Oct 23, 2024",
    description: "This blog documents the thought-process of my hackathon team and the overall implementation of a Web3 hackathon project.",
    topics: "Hackathons, Web3, Cryptography, zkProofs",
    imageUrl: "/portfolio-website/profile.png",
    link: "https://medium.com/@pranavbhat2004/the-future-of-digital-event-management-with-zkproofs-and-zksnarks-an-insight-into-the-on-chain-ea127db5fa20"
  }
];

// Sanity Blog Card Component
function SanityBlogCard({ blog }: { blog: BlogPost }) {
  return (
    <section className="p-6 hover:duration-500 hover:scale-105 w-full flex flex-col md:flex-row items-center border rounded-lg border-gray-500">
      {/* Featured Image */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-300 relative flex-shrink-0">
        {blog.featuredImage ? (
          <Image
            src={urlFor(blog.featuredImage).url()}
            alt={blog.title}
            fill={true}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-600 flex items-center justify-center">
            <span className="text-gray-400 text-xs">No Image</span>
          </div>
        )}
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col mt-4 md:mt-0 md:ml-6 text-center md:text-left flex-grow">
        <h4
          className="text-lg font-bold hover:underline"
          style={{ color: "#D4D4D4" }}
        >
          <Link href={`/blogs/${blog.slug.current}`}>
            {blog.title}
          </Link>
        </h4>
        <p className="text-white text-sm">
          {new Date(blog.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <div className="pt-4 gap-y-1 flex flex-col">
          <p className="text-white text-sm">
            {blog.excerpt}
          </p>
          {blog.tags && blog.tags.length > 0 && (
            <p className="text-white flex-col flex text-xs gap-y-1">
              Topics: {blog.tags.join(', ')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

// External Blog Card Component
interface ExternalBlogCardProps {
  title: string;
  date: string;
  description: string;
  topics: string;
  imageUrl: string;
  link: string;
}

function ExternalBlogCard({ title, date, description, topics, imageUrl, link }: ExternalBlogCardProps) {
  return (
    <section className="p-6 hover:duration-500 hover:scale-105 w-full flex flex-col md:flex-row items-center border rounded-lg border-gray-500">
      {/* Profile Picture */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-300 relative flex-shrink-0">
        <Image
          src={imageUrl}
          alt="Blog thumbnail"
          fill={true}
          className="object-cover"
        />
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col mt-4 md:mt-0 md:ml-6 text-center md:text-left flex-grow">
        <h4
          className="text-lg font-bold hover:underline"
          style={{ color: "#D4D4D4" }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}{" "}
            <span>&#8599;</span>
          </a>
        </h4>
        <p className="text-white text-sm">{date}</p>
        <div className="pt-4 gap-y-1 flex flex-col">
          <p className="text-white text-sm">
            {description}
          </p>
          <p className="text-white flex-col flex text-xs gap-y-1">
            Topics: {topics}
          </p>
        </div>
      </div>
    </section>
  );
}

// Types for external blogs
interface ExternalBlog {
  id: number;
  title: string;
  date: string;
  description: string;
  topics: string;
  imageUrl: string;
  link: string;
}

export default function BlogsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sanityBlogs, setSanityBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSanityBlogs = async () => {
      try {
        const blogs = await client.fetch(blogPostsQuery);
        setSanityBlogs(blogs);
      } catch (error) {
        console.error('Error fetching Sanity blogs:', error);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    };

    fetchSanityBlogs();
  }, []);

  // Combine external and Sanity blogs
  const totalBlogCount = externalBlogsData.length + sanityBlogs.length;

  return (
    <main className={`flex lg:w-3/5 mx-auto flex-col items-center lg:my-36 w-5/6 my-20 lg:p-2 mx-auto gap-y-10 rounded-lg ${isLoaded ? 'fade-in' : 'content-hidden'}`}>
      {/* Header Section */}
      <section className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-6">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors mb-4 md:mb-0">
            <FiArrowLeft className="text-2xl" />
          </Link>
          <h1 className={kanit.className} style={{ fontSize: '48px', color: "#D4D4D4" }}>
            Blog Posts
          </h1>
        </div>
        <p className="text-gray-500 text-sm" style={{ color: "#D4D4D4" }}>
          A collection of my thoughts, experiences, and insights on technology, machine learning, web development, and more.
        </p>
      </section>

      {/* Blogs Section */}
      <section className="flex flex-col w-full gap-y-6">
        <h3 className={kanit.className} style={{ fontSize: '24px', color: "#D4D4D4" }}>
          All Posts ({totalBlogCount})
        </h3>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <div className="text-white text-lg">Loading blogs...</div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 w-full">
            {/* Sanity CMS Blogs */}
            {sanityBlogs.map((blog) => (
              <SanityBlogCard
                key={blog._id}
                blog={blog}
              />
            ))}
            
            {/* External Blogs */}
            {externalBlogsData.map((blog: ExternalBlog) => (
              <ExternalBlogCard
                key={blog.id}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                topics={blog.topics}
                imageUrl={blog.imageUrl}
                link={blog.link}
              />
            ))}
          </div>
        )}
      </section>

      {/* Connect Section */}
      <section className="flex flex-col w-full space-y-6 items-center">
        <div className="text-center space-y-2">
          <h3 className={kanit.className} style={{ fontSize: '20px', color: "#D4D4D4" }}>
            Let&apos;s Connect
          </h3>
          <p className="text-gray-400 text-sm max-w-md">
            Follow me for more insights on tech, AI, and web development
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto">
          <Link 
            href="https://medium.com/@pranavbhat2004" 
            target="_blank"
            className="group flex items-center justify-center gap-3 px-4 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 w-full sm:w-auto min-w-[140px]"
          >
            <FaMedium className="text-white text-xl group-hover:scale-110 transition-transform" />
            <span className="text-white text-sm font-medium">Medium</span>
          </Link>
          
          <Link 
            href="https://www.linkedin.com/in/pranav-bhat-966003195/" 
            target="_blank"
            className="group flex items-center justify-center gap-3 px-4 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 w-full sm:w-auto min-w-[140px]"
          >
            <FiLinkedin className="text-white text-xl group-hover:scale-110 transition-transform" />
            <span className="text-white text-sm font-medium">LinkedIn</span>
          </Link>
          
          <Link 
            href="https://x.com/PranavBhat333" 
            target="_blank"
            className="group flex items-center justify-center gap-3 px-4 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 w-full sm:w-auto min-w-[140px]"
          >
            <FaXTwitter className="text-white text-xl group-hover:scale-110 transition-transform" />
            <span className="text-white text-sm font-medium">Twitter</span>
          </Link>
        </div>
      </section>
    </main>
  );
} 