import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Users, Wallet, TrendingUp, CheckCircle2 } from 'lucide-react';

const EntrepreneurSimulation = () => {
  const objectives = [
    {
      icon: Building2,
      title: "Business Model Development",
      description: "Learn to create and validate business models using the Business Model Canvas framework."
    },
    {
      icon: Users,
      title: "Market Research",
      description: "Conduct customer interviews and analyze market data to validate your business idea."
    },
    {
      icon: Wallet,
      title: "Financial Planning",
      description: "Create financial projections and understand key metrics for startup success."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Develop strategies for customer acquisition and business scaling."
    }
  ];

  const modules = [
    {
      title: "Module 1: Ideation and Value Proposition",
      tasks: [
        "Identify market opportunities",
        "Define your value proposition",
        "Create customer personas",
        "Validate assumptions through customer interviews"
      ]
    },
    {
      title: "Module 2: Business Model Design",
      tasks: [
        "Complete the Business Model Canvas",
        "Define revenue streams",
        "Map key resources and activities",
        "Identify strategic partnerships"
      ]
    },
    {
      title: "Module 3: Financial Planning",
      tasks: [
        "Create financial projections",
        "Calculate unit economics",
        "Determine funding requirements",
        "Build a pricing strategy"
      ]
    },
    {
      title: "Module 4: Go-to-Market Strategy",
      tasks: [
        "Develop marketing plan",
        "Create sales strategy",
        "Plan customer acquisition channels",
        "Set growth metrics and KPIs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Simulations
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Startup Fundamentals: Entrepreneurship Simulation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the journey of building a startup from ideation to market entry. Learn key entrepreneurial skills through hands-on exercises and real-world scenarios.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Simulation
              </button>
              <div className="text-sm text-gray-500">
                Duration: 6-8 hours
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Learning Objectives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <objective.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{objective.title}</h3>
              <p className="text-gray-600">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Simulation Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Simulation Modules</h2>
        <div className="space-y-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{module.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {module.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurSimulation;