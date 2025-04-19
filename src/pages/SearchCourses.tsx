
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/ui/CourseCard";
import { FilterOptions } from "@/components/ui/FilterOptions";
import { useState } from "react";

export default function SearchCourses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  // Filter options
  const categories = [
    { id: "web-dev", label: "Web Development" },
    { id: "design", label: "Design" },
    { id: "data-science", label: "Data Science" },
    { id: "business", label: "Business" },
  ];

  const levels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Search Courses</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <Input
                type="search"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
              />
              <Button className="w-full bg-purple-400 hover:bg-purple-500">
                Search
              </Button>
            </div>

            <div className="space-y-4">
              <FilterOptions
                title="Categories"
                options={categories}
                selectedOptions={selectedCategories}
                onChange={setSelectedCategories}
              />
              <FilterOptions
                title="Level"
                options={levels}
                selectedOptions={selectedLevels}
                onChange={setSelectedLevels}
              />
            </div>
          </div>

          {/* Course Results */}
          <div className="md:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mock course results */}
              <CourseCard
                id="1"
                title="Web Development Bootcamp"
                instructor="Sarah Johnson"
                description="Learn modern web development from the ground up."
                imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                price={89.99}
                duration="12 weeks"
                level="Beginner"
                category="Development"
              />
              <CourseCard
                id="2"
                title="UI/UX Design Masterclass"
                instructor="Michael Chen"
                description="Master the art of creating beautiful interfaces."
                imageUrl="https://images.unsplash.com/photo-1541462608143-67571c6738dd"
                price={79.99}
                duration="8 weeks"
                level="Intermediate"
                category="Design"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
