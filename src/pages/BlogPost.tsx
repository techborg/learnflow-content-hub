
import { Layout } from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Clock } from "lucide-react";

export default function BlogPost() {
  // Mock blog post data
  const post = {
    title: "10 Essential Tips for New Web Developers",
    author: {
      name: "Alex Turner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Senior Developer",
    },
    date: "May 15, 2023",
    readingTime: "5 min read",
    content: `
      <p class="mb-4">
        Starting your journey as a web developer can be both exciting and overwhelming. 
        Here are 10 essential tips to help you navigate the learning process effectively 
        and build a strong foundation for your career.
      </p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">1. Master the Fundamentals</h2>
      <p class="mb-4">
        Before diving into frameworks and libraries, ensure you have a solid 
        understanding of HTML, CSS, and JavaScript. These fundamentals are the 
        building blocks of web development.
      </p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">2. Practice Regular Coding</h2>
      <p class="mb-4">
        Consistency is key. Set aside dedicated time each day to code, even if 
        it's just for an hour. Regular practice helps reinforce learning and 
        builds muscle memory.
      </p>
    `,
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{post.author.name}</p>
                <p className="text-sm">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readingTime}</span>
              </div>
            </div>
          </div>
          
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </Layout>
  );
}
