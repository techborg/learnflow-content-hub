
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CourseCard } from "@/components/ui/CourseCard";
import { SearchBox } from "@/components/ui/SearchBox";
import { FilterOptions } from "@/components/ui/FilterOptions";

export default function Courses() {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [levelFilters, setLevelFilters] = useState<string[]>([]);

  // Mock data for courses
  const allCourses = [
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
    {
      id: "4",
      title: "Advanced React Patterns",
      instructor: "David Kim",
      description: "Take your React skills to the next level with advanced patterns, state management, and performance optimization.",
      category: "Development",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: 129.99,
      duration: "6 weeks",
      level: "Advanced" as const,
    },
    {
      id: "5",
      title: "Digital Marketing Strategy",
      instructor: "Jessica Thompson",
      description: "Learn how to create effective digital marketing strategies that drive traffic, engagement, and conversions.",
      category: "Marketing",
      imageUrl: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: 69.99,
      duration: "5 weeks",
      level: "Beginner" as const,
    },
    {
      id: "6",
      title: "Python for Machine Learning",
      instructor: "Robert Chen",
      description: "Build machine learning models with Python and popular libraries like TensorFlow, Keras, and scikit-learn.",
      category: "Data Science",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      price: 119.99,
      duration: "9 weeks",
      level: "Advanced" as const,
    },
  ];

  // Filter options
  const categoryOptions = [
    { id: "Development", label: "Development" },
    { id: "Design", label: "Design" },
    { id: "Data Science", label: "Data Science" },
    { id: "Marketing", label: "Marketing" },
  ];

  const levelOptions = [
    { id: "Beginner", label: "Beginner" },
    { id: "Intermediate", label: "Intermediate" },
    { id: "Advanced", label: "Advanced" },
  ];

  // Filtered courses
  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(course.category);
    const matchesLevel = levelFilters.length === 0 || levelFilters.includes(course.level);
    return matchesCategory && matchesLevel;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">All Courses</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
          <SearchBox placeholder="Search for courses..." />
          
          <div className="flex flex-wrap gap-3">
            <FilterOptions 
              title="Category" 
              options={categoryOptions} 
              selectedOptions={categoryFilters} 
              onChange={setCategoryFilters} 
            />
            <FilterOptions 
              title="Level" 
              options={levelOptions} 
              selectedOptions={levelFilters}
              onChange={setLevelFilters} 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))
          ) : (
            <div className="col-span-3 text-center py-16">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
