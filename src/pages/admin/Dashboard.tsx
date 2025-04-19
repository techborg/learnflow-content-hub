
import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BookText, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <BookText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              +8 from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,384</div>
            <p className="text-xs text-muted-foreground">
              +14% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,543</div>
            <p className="text-xs text-muted-foreground">
              +18% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <Card className="mb-8">
        <CardContent className="p-0">
          <div className="divide-y">
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="font-medium">New course published</p>
                <p className="text-sm text-muted-foreground">Advanced React Patterns</p>
              </div>
              <span className="text-xs text-muted-foreground">2 hours ago</span>
            </div>
            
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="font-medium">New blog post published</p>
                <p className="text-sm text-muted-foreground">The Future of E-Learning in 2023</p>
              </div>
              <span className="text-xs text-muted-foreground">5 hours ago</span>
            </div>
            
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-muted-foreground">John Smith</p>
              </div>
              <span className="text-xs text-muted-foreground">1 day ago</span>
            </div>
            
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="font-medium">Course updated</p>
                <p className="text-sm text-muted-foreground">UI/UX Design Masterclass</p>
              </div>
              <span className="text-xs text-muted-foreground">2 days ago</span>
            </div>
            
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="font-medium">New blog post published</p>
                <p className="text-sm text-muted-foreground">10 Essential Tips for New Web Developers</p>
              </div>
              <span className="text-xs text-muted-foreground">3 days ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Popular Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Popular Courses</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">Complete Web Development Bootcamp</p>
                  <p className="text-sm text-muted-foreground">1,245 enrollments</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
              </div>
              
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">UI/UX Design Masterclass</p>
                  <p className="text-sm text-muted-foreground">895 enrollments</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
              </div>
              
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">Data Science Fundamentals</p>
                  <p className="text-sm text-muted-foreground">756 enrollments</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
              </div>
              
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">Digital Marketing Strategy</p>
                  <p className="text-sm text-muted-foreground">612 enrollments</p>
                </div>
                <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">Draft</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Popular Articles</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">10 Essential Tips for New Web Developers</p>
                  <p className="text-sm text-muted-foreground">2,345 views</p>
                </div>
                <span className="text-xs text-muted-foreground">May 15</span>
              </div>
              
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">The Future of E-Learning in 2023</p>
                  <p className="text-sm text-muted-foreground">1,987 views</p>
                </div>
                <span className="text-xs text-muted-foreground">June 2</span>
              </div>
              
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">How AI is Transforming Education</p>
                  <p className="text-sm text-muted-foreground">1,756 views</p>
                </div>
                <span className="text-xs text-muted-foreground">June 10</span>
              </div>
              
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">5 UI Design Principles for Developers</p>
                  <p className="text-sm text-muted-foreground">1,543 views</p>
                </div>
                <span className="text-xs text-muted-foreground">June 15</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
