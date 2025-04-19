
import { Layout } from "@/components/layout/Layout";
import { CourseCard } from "@/components/ui/CourseCard";
import { BlogCard } from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { SearchBox } from "@/components/ui/SearchBox";
import { Link } from "react-router-dom";

export default function Home() {
  // Mock data for featured courses
  const featuredCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      description: "Learn modern web development from the ground up with HTML, CSS, JavaScript, React, Node.js and more.",
      category: "Development",
      imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: 89.99,
      duration: "12 weeks",
      level: "Beginner" as const,
    },
    {
      id: "2",
      title: "UI/UX Design Masterclass",
      instructor: "Michael Chen",
      description: "Master the art of creating beautiful and user-friendly interfaces with this comprehensive design course.",
      category: "Design",
      imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: 79.99,
      duration: "8 weeks",
      level: "Intermediate" as const,
    },
    {
      id: "3",
      title: "Data Science Fundamentals",
      instructor: "Emily Rodriguez",
      description: "Explore the world of data science with Python, machine learning, and data visualization techniques.",
      category: "Data Science",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: 99.99,
      duration: "10 weeks",
      level: "Intermediate" as const,
    },
  ];

  // Mock data for latest blog posts
  const latestPosts = [
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
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Expand Your Knowledge with Quality Learning
            </h1>
            <p className="text-lg mb-8 text-purple-100">
              Access expert-led courses and insightful articles to boost your skills
              and advance your career in technology, design, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Read Articles
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-6">Find your next learning opportunity</h2>
              <SearchBox placeholder="Search for courses, topics, or skills..." />
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Web Development</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">UX Design</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Data Science</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses">
              <Button variant="ghost" className="text-purple-500 hover:text-purple-600">
                View All Courses
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Web Development</h3>
              <p className="text-muted-foreground text-sm">25 Courses</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">18 Courses</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Data Science</h3>
              <p className="text-muted-foreground text-sm">12 Courses</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Marketing</h3>
              <p className="text-muted-foreground text-sm">15 Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Link to="/blog">
              <Button variant="ghost" className="text-purple-500 hover:text-purple-600">
                View All Articles
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-purple-100">
            Join thousands of students who are already learning and growing with our courses and resources.
          </p>
          <Link to="/courses">
            <Button className="bg-white text-purple-600 hover:bg-purple-100">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
