import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  Play, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Download,
  Shield,
  Globe,
  BarChart3
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-slate-800">LeadHarvest AI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-primary transition-colors">Home</a>
              <a href="#features" className="text-slate-600 hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-primary transition-colors">Pricing</a>
              <a href="#resources" className="text-slate-600 hover:text-primary transition-colors">Resources</a>
              <a href="#contact" className="text-slate-600 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Platform Overview */}
      <section id="home" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
                          <h1 className="text-[50px] mt-4 w-[70%] mx-auto text-center font-bold text-slate-900 leading-[1.2] mb-10">
                AI-Powered Lead Generation for 
                <span className="text-primary"> Every Industry</span>
              </h1>
            
            <p className="text-lg text-slate-600 w-[61%] leading-[1.5] max-w-3xl mx-auto mb-12">
              Discover verified leads for dentists, real estate agents, SaaS companies, and more. 
              Our AI platform delivers targeted prospects with 95% accuracy in seconds.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-20">
              <Badge variant="secondary" className="px-4 py-[10px]">Dentists</Badge>
              <Badge variant="secondary" className="px-4 py-[10px]">Real Estate</Badge>
              <Badge variant="secondary" className="px-4 py-[10px]">SaaS</Badge>
              <Badge variant="secondary" className="px-4 py-[10px]">Marketing</Badge>
              <Badge variant="secondary" className="px-4 py-[10px]">Healthcare</Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          

        </div>
      </section>

      {/* Full Feature Details */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Generate Quality Leads
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From finding prospects to integrating with your CRM, we've got you covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Lead Finder</CardTitle>
                <CardDescription>
                  AI-powered search finds prospects based on industry, company size, location, and more
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Area Selection</CardTitle>
                <CardDescription>
                  Target specific geographic areas or expand your reach nationwide
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Email Verification</CardTitle>
                <CardDescription>
                  Verify email addresses in real-time with 99.9% accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>CRM Integration</CardTitle>
                <CardDescription>
                  One-click export to HubSpot, Salesforce, Zoho, and more
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Download Options</CardTitle>
                <CardDescription>
                  Export leads in CSV, Excel, or directly to your favorite tools
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Track your lead generation success with detailed insights and metrics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-600">
              Export leads directly to your favorite CRM with one click
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">HubSpot</h3>
                <p className="text-slate-600 mb-4">One-click export to HubSpot CRM</p>
                <Badge variant="secondary">Popular</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Salesforce</h3>
                <p className="text-slate-600 mb-4">Direct integration with Salesforce</p>
                <Badge variant="secondary">Enterprise</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Zoho</h3>
                <p className="text-slate-600 mb-4">Export to Zoho CRM instantly</p>
                <Badge variant="secondary">Growing</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies & Results */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-slate-600">
              See how companies are transforming their lead generation
            </p>
          </div>
          
          <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-700 via-blue-600 to-primary text-white">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/20">
                    Case Study
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">
                    How a Marketing Agency Got 5,000 Verified Leads in 3 Days
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    "LeadHarvest AI helped us scale our lead generation from 100 to 5,000 qualified prospects 
                    in just 3 days. The quality and accuracy of leads exceeded our expectations."
                  </p>
                  <div className="flex items-center space-x-6">
                    <div>
                      <div className="text-2xl font-bold">5,000+</div>
                      <div className="text-sm opacity-80">Leads Generated</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-sm opacity-80">Email Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">3 Days</div>
                      <div className="text-sm opacity-80">Time to Scale</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-semibold">Sarah Johnson</p>
                  <p className="opacity-80">Marketing Director, GrowthCo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resource Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Resources to Help You Succeed
            </h2>
            <p className="text-xl text-slate-600">
              Learn the latest strategies and best practices in lead generation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>
                  Step-by-step guides on YouTube to master LeadHarvest AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Watch Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Lead Generation Tips</CardTitle>
                <CardDescription>
                  Expert advice and strategies to improve your prospecting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Blog Articles</CardTitle>
                <CardDescription>
                  SEO-optimized content to drive organic traffic and engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Explore Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trust & Compliance
            </h2>
            <p className="text-xl text-slate-600">
              Your data security and privacy are our top priorities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">GDPR Compliant</h3>
                  <p className="text-slate-600">Full compliance with European data protection regulations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">CAN-SPAM Compliant</h3>
                  <p className="text-slate-600">Follows all email marketing regulations and best practices</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Privacy Policy</h3>
                  <p className="text-slate-600">Transparent data handling and privacy practices</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">End-to-end encryption</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">SOC 2 Type II certified</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Regular security audits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">24/7 monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">LeadHarvest AI</span>
              </div>
              <p className="text-slate-300 mb-4">
                AI-powered lead generation platform helping businesses find and connect with their ideal prospects.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 LeadHarvest AI. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-slate-400">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-400">CAN-SPAM Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 