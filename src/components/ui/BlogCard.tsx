
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  publishDate: string;
  readingTime: string;
}

export const BlogCard = ({
  id,
  title,
  author,
  excerpt,
  category,
  imageUrl,
  publishDate,
  readingTime,
}: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <CardHeader className="pb-0">
        <div className="flex justify-between items-center mb-2">
          <Badge className="bg-purple-100 text-purple-500 hover:bg-purple-200 hover:text-purple-600">
            {category}
          </Badge>
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {publishDate}
          </div>
        </div>
        <h3 className="font-semibold text-lg hover:text-purple-500 transition-colors">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
      </CardHeader>
      
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">By {author}</span>
        <span className="text-xs text-muted-foreground">{readingTime} min read</span>
      </CardFooter>
    </Card>
  );
};
