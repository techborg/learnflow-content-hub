
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();
  
  // This would normally fetch course data based on the ID
  const course = {
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    description: "Learn modern web development from the ground up with HTML, CSS, JavaScript, React, Node.js and more.",
    price: 89.99,
    duration: "12 weeks",
    level: "Beginner",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: ["Web fundamentals", "HTML basics", "CSS fundamentals"]
      },
      {
        title: "JavaScript Essentials",
        lessons: ["Variables & Data Types", "Functions & Objects", "DOM Manipulation"]
      },
      {
        title: "React Framework",
        lessons: ["React basics", "Components & Props", "State Management"]
      }
    ]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src={course.imageUrl}
              alt={course.title}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold">Instructor</h3>
                <p className="text-gray-600">{course.instructor}</p>
              </div>
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p className="text-gray-600">{course.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold">Level</h3>
                <p className="text-gray-600">{course.level}</p>
              </div>
              <div>
                <h3 className="font-semibold">Price</h3>
                <p className="text-gray-600">${course.price}</p>
              </div>
            </div>
            
            <Button className="w-full bg-purple-400 hover:bg-purple-500">
              Enroll Now
            </Button>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
          <div className="space-y-6">
            {course.curriculum.map((section, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="text-gray-600">
                      • {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
