
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export const CourseCard = ({
  id,
  title,
  instructor,
  description,
  category,
  imageUrl,
  price,
  duration,
  level,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
        <Badge className="absolute top-2 right-2 bg-purple-400 hover:bg-purple-500">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <p className="text-muted-foreground text-sm">By {instructor}</p>
        </div>
      </CardHeader>
      
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
          <span className="flex items-center gap-1">
            <span className="font-medium">{level}</span>
          </span>
          <span>{duration}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 pb-4 flex items-center justify-between">
        <div className="font-bold text-lg">
          ${price.toFixed(2)}
        </div>
        <Link to={`/courses/${id}`}>
          <Button className="bg-purple-400 hover:bg-purple-500">
            View Course
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
