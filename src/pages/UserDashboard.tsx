
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function UserDashboard() {
  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: "1",
      title: "Web Development Bootcamp",
      progress: 65,
      nextLesson: "React Fundamentals",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      id: "2",
      title: "UI/UX Design Masterclass",
      progress: 30,
      nextLesson: "User Research Methods",
      imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Learning Dashboard</h1>
          <Button className="bg-purple-400 hover:bg-purple-500">Browse Courses</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="p-6">
              <div className="flex gap-4">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-sm text-gray-600">
                      Next Lesson: {course.nextLesson}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
