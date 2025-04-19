
import { Layout } from "@/components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">About LearnFlow</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At LearnFlow, we believe in making quality education accessible to everyone. 
              Our platform brings together expert instructors and passionate learners 
              to create a vibrant learning community.
            </p>
            <p className="text-gray-600">
              Whether you're looking to develop new skills, advance your career, or 
              explore your interests, we're here to support your learning journey.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry professionals with real-world experience and proven expertise.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
            <p className="text-gray-600">
              Study at your own pace with our on-demand courses and comprehensive resources.
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Community Support</h3>
            <p className="text-gray-600">
              Join a supportive community of learners and educators sharing knowledge.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
