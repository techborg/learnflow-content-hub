
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
import { PlusCircle, Search, MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for blog posts
  const blogPosts = [
    {
      id: "1",
      title: "10 Essential Tips for New Web Developers",
      author: "Alex Turner",
      category: "Development",
      status: "Published",
      publishDate: "2023-05-15",
      readingTime: "5",
    },
    {
      id: "2",
      title: "The Future of E-Learning in 2023 and Beyond",
      author: "Sophia Martinez",
      category: "Education",
      status: "Published",
      publishDate: "2023-06-02",
      readingTime: "8",
    },
    {
      id: "3",
      title: "How AI is Transforming the Educational Landscape",
      author: "David Wilson",
      category: "Technology",
      status: "Published",
      publishDate: "2023-06-10",
      readingTime: "6",
    },
    {
      id: "4",
      title: "5 UI Design Principles Every Developer Should Know",
      author: "Emma Davis",
      category: "Design",
      status: "Draft",
      publishDate: "2023-06-15",
      readingTime: "7",
    },
    {
      id: "5",
      title: "The Complete Guide to Responsive Web Design",
      author: "James Lee",
      category: "Development",
      status: "Draft",
      publishDate: "2023-06-20",
      readingTime: "10",
    },
  ];

  // Filtered blog posts based on search
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
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
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <Link to="/admin/blog/new">
          <Button className="bg-purple-400 hover:bg-purple-500">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Article
          </Button>
        </Link>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
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
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Reading Time</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>{getStatusBadge(post.status)}</TableCell>
                  <TableCell>{post.publishDate}</TableCell>
                  <TableCell>{post.readingTime} min</TableCell>
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
                  <p className="text-muted-foreground">No articles found</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
}
