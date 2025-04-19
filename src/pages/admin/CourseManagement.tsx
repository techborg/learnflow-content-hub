
import { useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Search, MoreHorizontal, Edit, Trash2, Eye, FilePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for courses
  const courses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      category: "Development",
      price: 89.99,
      status: "Published",
      createdAt: "2023-05-10",
    },
    {
      id: "2",
      title: "UI/UX Design Masterclass",
      instructor: "Michael Chen",
      category: "Design",
      price: 79.99,
      status: "Published",
      createdAt: "2023-05-15",
    },
    {
      id: "3",
      title: "Data Science Fundamentals",
      instructor: "Emily Rodriguez",
      category: "Data Science",
      price: 99.99,
      status: "Published",
      createdAt: "2023-05-20",
    },
    {
      id: "4",
      title: "Advanced React Patterns",
      instructor: "David Kim",
      category: "Development",
      price: 129.99,
      status: "Draft",
      createdAt: "2023-06-01",
    },
    {
      id: "5",
      title: "Digital Marketing Strategy",
      instructor: "Jessica Thompson",
      category: "Marketing",
      price: 69.99,
      status: "Draft",
      createdAt: "2023-06-05",
    },
  ];

  // Filtered courses based on search
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Badge color based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge className="bg-green-500">Published</Badge>;
      case "Draft":
        return <Badge variant="outline">Draft</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Course Management</h1>
        <Link to="/admin/courses/new">
          <Button className="bg-purple-400 hover:bg-purple-500">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Course
          </Button>
        </Link>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="bg-white rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>{course.category}</TableCell>
                  <TableCell>${course.price.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(course.status)}</TableCell>
                  <TableCell>{course.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FilePlus className="h-4 w-4 mr-2" />
                          Add Lesson
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  <p className="text-muted-foreground">No courses found</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
}
