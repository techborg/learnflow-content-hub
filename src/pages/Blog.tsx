
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BlogCard } from "@/components/ui/BlogCard";
import { SearchBox } from "@/components/ui/SearchBox";
import { FilterOptions } from "@/components/ui/FilterOptions";

export default function Blog() {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);

  // Mock data for blog posts
  const allPosts = [
    {
      id: "1",
      title: "10 Essential Tips for New Web Developers",
      author: "Alex Turner",
      excerpt: "Starting your journey as a web developer can be overwhelming. Here are 10 tips to help you navigate the learning process effectively.",
      category: "Development",
      imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publishDate: "May 15, 2023",
      readingTime: "5",
    },
    {
      id: "2",
      title: "The Future of E-Learning in 2023 and Beyond",
      author: "Sophia Martinez",
      excerpt: "E-learning is evolving rapidly with new technologies. Discover the trends that will shape online education in the coming years.",
      category: "Education",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publishDate: "June 2, 2023",
      readingTime: "8",
    },
    {
      id: "3",
      title: "How AI is Transforming the Educational Landscape",
      author: "David Wilson",
      excerpt: "Artificial intelligence is revolutionizing how we teach and learn. Explore the impact of AI on modern education systems.",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publishDate: "June 10, 2023",
      readingTime: "6",
    },
    {
      id: "4",
      title: "5 UI Design Principles Every Developer Should Know",
      author: "Emma Davis",
      excerpt: "Even if you're not a designer, understanding these UI principles can significantly improve the user experience of your applications.",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publishDate: "June 15, 2023",
      readingTime: "7",
    },
    {
      id: "5",
      title: "The Complete Guide to Responsive Web Design",
      author: "James Lee",
      excerpt: "Learn how to create websites that look great on any device with these responsive design techniques and best practices.",
      category: "Development",
      imageUrl: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publishDate: "June 20, 2023",
      readingTime: "10",
    },
    {
      id: "6",
      title: "Building an Effective Learning Routine",
      author: "Maria Rodriguez",
      excerpt: "Consistency is key to mastering new skills. Discover how to create a learning routine that fits your lifestyle and helps you achieve your goals.",
      category: "Education",
      imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      publishDate: "June 25, 2023",
      readingTime: "5",
    },
  ];

  // Filter options
  const categoryOptions = [
    { id: "Development", label: "Development" },
    { id: "Design", label: "Design" },
    { id: "Technology", label: "Technology" },
    { id: "Education", label: "Education" },
  ];

  // Filtered posts
  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(post.category);
    return matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
          <SearchBox placeholder="Search articles..." />
          
          <div className="flex flex-wrap gap-3">
            <FilterOptions 
              title="Category" 
              options={categoryOptions} 
              selectedOptions={categoryFilters} 
              onChange={setCategoryFilters} 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
