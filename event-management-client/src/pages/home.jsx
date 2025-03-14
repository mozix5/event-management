import { Calendar, Heart, MessageCircle } from "lucide-react";
import Footer from "../components/footer.jsx";
import FeatureCard from "../components/featureCard.jsx";
import TestimonialCard from "../components/testimonialCard.jsx";

const featureSection = [
  {
    title: "Discover Events",
    description:
      " Find local gatherings, services, and meetups that align with your interests and beliefs, all in one place.",
  },
  {
    title: "Build Community",
    description:
      " Connect with people from diverse backgrounds who share your values and create lasting friendships.",
  },
  {
    title: "Explore Faith",
    description:
      " Learn about different beliefs and traditions in a respectful, open environment that celebrates diversity.",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Communion has transformed how I connect with my community. I've met amazing people and discovered events I never would have found otherwise.",
    name: "Sarah J.",
    role: "Community Member",
  },
  {
    id: 2,
    quote:
      "As a faith leader, this platform has helped us reach more people and create a more inclusive community. The interface is beautiful and intuitive.",
    name: "Michael R.",
    role: "Community Leader",
  },
  {
    id: 3,
    quote:
      "New to the area, I was looking for ways to connect. Through Communion, I found events that matched my interests and made friends almost immediately.",
    name: "David L.",
    role: "New Member",
  },
];
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-400 font-medium mb-6">
                Coming Together • Building Bridges
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Connecting People Across Faiths & Interests
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Discover meaningful events and build genuine connections with
                people who share your values and interests, regardless of faith
                background.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center group">
                  <Calendar className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Explore Events
                </button>
                <button className="px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-purple-500 hover:text-purple-400 transition duration-300 flex items-center justify-center">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gray-800 p-2 rounded-lg">
                  <img
                    src=""
                    alt="People connecting at community event"
                    className="rounded-lg w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              How Communion Brings People Together
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Connecting communities, celebrating diversity, and creating
              meaningful relationships in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureSection.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              What Our Community Says
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <TestimonialCard
                quote={item.quote}
                name={item.name}
                role={item.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">10K+</h4>
              <p className="text-purple-200">Active Users</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">500+</h4>
              <p className="text-purple-200">Communities</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">1,200+</h4>
              <p className="text-purple-200">Monthly Events</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-white mb-2">50+</h4>
              <p className="text-purple-200">Faith Traditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute h-32 w-32 bg-purple-500 rounded-full opacity-10 -top-10 -left-10"></div>
            <div className="absolute h-24 w-24 bg-pink-500 rounded-full opacity-10 -bottom-10 -right-10"></div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text relative z-10">
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-300 mb-8 relative z-10">
              Start your journey today and connect with like-minded individuals
              across different faiths and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5" />
                Get Started Now
              </button>
              <button className="px-8 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-300 flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
