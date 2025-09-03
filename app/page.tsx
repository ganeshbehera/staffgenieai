"use client"

import { useState, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WaitlistModal } from "@/components/waitlist-modal"
import {
  Calendar,
  Clock,
  Users,
  Brain,
  Smartphone,
  FileText,
  TrendingUp,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight,
  Store,
  Building2,
  Zap,
  BarChart3,
  Shield,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Target,
  Bell,
  MessageSquare,
  UserCheck,
  AlertTriangle,
  Settings,
  MoreVertical,
  Check,
} from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export default function StaffGenieLanding() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const [currentDemo, setCurrentDemo] = useState(0)
  const [taskStatus, setTaskStatus] = useState(0)
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 1000], [0, -100])

  // Auto-rotate demos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo(prev => (prev + 1) % 3)
      setTaskStatus(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const staffData = [
    { name: "Sarah Mitchell", role: "Floor Manager", status: "active", hours: "8:00 AM - 4:00 PM" },
    { name: "James Rodriguez", role: "Sales Associate", status: "break", hours: "9:00 AM - 5:00 PM" },
    { name: "Emily Chen", role: "Cashier", status: "active", hours: "10:00 AM - 6:00 PM" },
    { name: "Michael Brown", role: "Stock Assistant", status: "scheduled", hours: "2:00 PM - 10:00 PM" },
  ]

  const tasks = [
    { task: "Weekly Schedule Review", status: taskStatus === 0 ? "pending" : taskStatus === 1 ? "in-progress" : "completed", priority: "high" },
    { task: "Staff Performance Analysis", status: taskStatus === 1 ? "pending" : taskStatus === 2 ? "in-progress" : "completed", priority: "medium" },
    { task: "Inventory Count", status: taskStatus === 2 ? "pending" : taskStatus === 3 ? "in-progress" : "completed", priority: "low" },
    { task: "Customer Feedback Review", status: taskStatus === 3 ? "pending" : "completed", priority: "medium" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="h-16 flex items-center justify-center">
              <Image 
                src="/staffgenie_logo.png" 
                alt="StaffGenie AI Logo" 
                width={64} 
                height={64}
                className="h-16 w-auto"
              />
            </div>
          </motion.div>
          
                     <nav className="hidden md:flex items-center space-x-8">
             <a href="#services" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Services</a>
             <a href="#process" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Process</a>
             <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Benefits</a>
           </nav>
          
                    <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={() => setIsWaitlistModalOpen(true)}
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Waitlist
            </Button>
          </motion.div>
        </div>
      </motion.header>

             {/* Hero Section */}
       <section ref={heroRef} className="relative py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
         <div className="container mx-auto max-w-7xl">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             {/* Left Column - Content */}
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="space-y-6 md:space-y-8 text-center lg:text-left"
             >
                                            <Badge className="bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-50 text-sm px-4 py-2">
                 <Sparkles className="w-4 h-4 mr-2" />
                 🚀 Coming Soon - Early Access Available
               </Badge>

                             <motion.h1 
                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
               >
                 Intelligent Automation for{" "}
                 <motion.span 
                   className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                 >
                   Modern Retail.
                 </motion.span>
               </motion.h1>

               <motion.p 
                 className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-lg mx-auto lg:mx-0"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
               >
                 StaffGenie brings AI automation to your fingertips & streamline workforce management tasks.
               </motion.p>

                                            <motion.div 
                 whileHover={{ scale: 1.05 }} 
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
               >
                 <Button
                   size="lg"
                   onClick={() => setIsWaitlistModalOpen(true)}
                   className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium py-4 px-12 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                 >
                   Join Waitlist Free
                   <ArrowRight className="w-5 h-5 ml-2" />
                 </Button>
               </motion.div>

                                            <div className="flex flex-col lg:flex-row items-center justify-start space-y-4 lg:space-y-0 lg:space-x-12 text-gray-500 pt-8">
                 <div className="flex items-center space-x-2">
                   <CheckCircle className="w-5 h-5 text-teal-500" />
                   <span className="text-sm">No Credit Card Required</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <CheckCircle className="w-5 h-5 text-teal-500" />
                   <span className="text-sm">Free Setup & Training</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <CheckCircle className="w-5 h-5 text-teal-500" />
                   <span className="text-sm">Early Access Benefits</span>
                 </div>
               </div>
            </motion.div>

            {/* Right Column - Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Staff Management Dashboard Demo */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Staff Management</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-medium text-gray-900">Today's Schedule</h4>
                                         <div className="flex items-center space-x-2">
                       <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                       <span className="text-sm text-gray-600">Live</span>
                     </div>
                  </div>

                  {staffData.map((staff, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                                             <div className="flex items-center space-x-3">
                         <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-medium">
                           {staff.name.split(' ').map(n => n[0]).join('')}
                         </div>
                        <div>
                          <div className="font-medium text-gray-900">{staff.name}</div>
                          <div className="text-sm text-gray-500">{staff.role}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-900">{staff.hours}</div>
                                                 <div className={`text-xs px-2 py-1 rounded-full ${
                           staff.status === 'active' ? 'bg-teal-100 text-teal-700' :
                           staff.status === 'break' ? 'bg-yellow-100 text-yellow-700' :
                           'bg-gray-100 text-gray-700'
                         }`}>
                          {staff.status}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

                             {/* Floating AI Assistant */}
               <motion.div
                 className="absolute -right-4 lg:-right-8 top-32 bg-white rounded-xl shadow-lg border border-gray-100 p-4 w-56 lg:w-64 hidden md:block"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
               >
                                 <div className="flex items-center space-x-2 mb-3">
                   <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                     <Brain className="w-4 h-4 text-white" />
                   </div>
                   <span className="font-medium text-gray-900">AI Assistant</span>
                 </div>
                <div className="text-sm text-gray-600 mb-2">
                  "Sarah's shift ends in 30 minutes. Should I notify Mike to come in early?"
                </div>
                                 <div className="flex space-x-2">
                   <Button size="sm" className="text-xs bg-teal-50 text-teal-600 hover:bg-teal-100">
                     Yes, notify
                   </Button>
                   <Button size="sm" variant="outline" className="text-xs">
                     Not now
                   </Button>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

             {/* Services Section */}
       <section id="services" className="py-16 md:py-20 px-4 md:px-6 bg-white">
         <div className="container mx-auto max-w-7xl">
           <motion.div 
             className="text-center mb-12 md:mb-16"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                              Powerful Retail Workforce Management Platform
             </h2>
             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
               StaffGenie is an all-in-one platform that automates scheduling, optimizes staffing, and drives retail performance. Join our waitlist for early access.
             </p>
           </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
            {/* Automated Scheduling */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Automated Scheduling</h3>
                                <h4 className="text-xl font-semibold text-teal-600">AI-Powered Staff Planning</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our advanced algorithms automatically create optimal schedules based on sales data, foot traffic, and staff availability. Real-time adjustments keep your store perfectly staffed.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Smart Forecasting</Badge>
                  <Badge variant="secondary">Auto-Scheduling</Badge>
                  <Badge variant="secondary">Real-time Updates</Badge>
                </div>
              </div>
            </motion.div>

                         <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
               className="relative order-1 lg:order-2"
               whileHover={{ scale: 1.02 }}
             >
               {/* Task Dashboard Demo */}
               <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900">All Tasks</h4>
                  <span className="text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    Waiting for approval
                  </span>
                </div>
                
                <div className="space-y-3">
                  {tasks.map((task, index) => (
                    <motion.div
                      key={index}
                                             className="flex items-center justify-between p-3 bg-white rounded-lg"
                       animate={{ 
                         backgroundColor: task.status === 'in-progress' ? '#ccfbf1' : '#ffffff' 
                       }}
                    >
                                             <div className="flex items-center space-x-3">
                         <div className={`w-2 h-2 rounded-full ${
                           task.status === 'completed' ? 'bg-teal-400' :
                           task.status === 'in-progress' ? 'bg-cyan-400' :
                           'bg-gray-300'
                         }`}></div>
                        <span className="text-sm font-medium text-gray-900">{task.task}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          task.priority === 'high' ? 'bg-red-100 text-red-700' :
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {task.status}
                        </span>
                                                 {task.status === 'completed' && (
                           <Check className="w-4 h-4 text-teal-600" />
                         )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              {/* AI Assistant Demo */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                 <div className="flex items-center space-x-3 mb-6">
                   <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                     <Brain className="w-5 h-5 text-white" />
                   </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Assistant</h4>
                    <p className="text-sm text-gray-500">Always ready to help</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">What can I help with?</p>
                    <p className="text-xs text-gray-500">Whether you want help in staff scheduling or make changes in your system just give me command</p>
                </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      Schedule Staff
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <BarChart3 className="w-3 h-3 mr-1" />
                      Analyze
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      Manage Team
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      Generate Report
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
                            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Dashboard</h3>
                                <h4 className="text-xl font-semibold text-teal-600">Real-time Insights & Controls</h4>
                <p className="text-gray-600 leading-relaxed">
                  Get instant visibility into your workforce metrics, sales performance, and staffing efficiency. Our smart dashboard 
                  proactively alerts you about staffing gaps and provides actionable recommendations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Live Analytics</Badge>
                  <Badge variant="secondary">Smart Alerts</Badge>
                  <Badge variant="secondary">Performance Metrics</Badge>
                </div>
          </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Sales & Marketing</h3>
                                 <h4 className="text-xl font-semibold text-teal-600">Accelerate Sales Growth</h4>
                 <p className="text-gray-600 leading-relaxed">
                   AI tools for customer insights, personalized staff recommendations, and automated performance 
                   tracking that will scale your retail operations and build stronger customer relationships.
                 </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Customer Insights</Badge>
                  <Badge variant="secondary">Performance Tracking</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Analytics Demo */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-6">Performance Analytics</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                                     <div className="bg-white p-4 rounded-lg text-center">
                     <div className="text-2xl font-bold text-teal-600">15%</div>
                     <div className="text-xs text-gray-500">Cost Reduction</div>
                   </div>
                   <div className="bg-white p-4 rounded-lg text-center">
                     <div className="text-2xl font-bold text-cyan-600">25%</div>
                     <div className="text-xs text-gray-500">Efficiency Gain</div>
                   </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Staff Utilization</span>
                    <span className="text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                                         <motion.div
                       className="bg-teal-500 h-2 rounded-full"
                       initial={{ width: 0 }}
                       whileInView={{ width: "92%" }}
                       transition={{ duration: 1.5, delay: 0.5 }}
                     ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
               Get Started in Minutes
             </h2>
             <p className="text-xl text-gray-600">
               StaffGenie's intuitive platform makes it easy to transform your workforce management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
                             <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <div className="text-2xl font-bold text-teal-600">1</div>
               </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Setup</h3>
               <p className="text-gray-600">
                 Sign up and connect your store data. Our platform automatically analyzes your staffing needs and patterns.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
                             <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <div className="text-2xl font-bold text-teal-600">2</div>
               </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Optimization</h3>
               <p className="text-gray-600">
                 Watch as StaffGenie creates optimized schedules and provides real-time staffing recommendations.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-teal-600">3</div>
              </div>
                             <h3 className="text-xl font-bold text-gray-900 mb-4">Scale with Ease</h3>
               <p className="text-gray-600">
                 Add more stores, customize features, and watch your efficiency grow with our flexible platform.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

             {/* Benefits Section */}
       <section id="benefits" className="py-16 md:py-20 px-4 md:px-6 bg-white">
         <div className="container mx-auto max-w-6xl">
           <motion.div 
             className="text-center mb-12 md:mb-16"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
               Powerful Features That Drive Results
             </h2>
             <p className="text-lg md:text-xl text-gray-600">
               Every feature in StaffGenie is designed to maximize your retail performance and staff productivity
             </p>
           </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Smart Forecasting",
                description: "AI-powered demand prediction automatically adjusts staffing levels based on historical data and upcoming events."
              },
              {
                icon: Users,
                title: "Team Management",
                description: "Centralized staff profiles, availability tracking, and automated shift swapping save hours of admin work."
              },
              {
                icon: Clock,
                title: "Real-time Monitoring",
                description: "Live dashboards track attendance, performance metrics, and labor costs as they happen."
              },
              {
                icon: DollarSign,
                title: "Budget Optimization",
                description: "Automated scheduling within labor budget constraints while maintaining optimal coverage."
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Built-in reporting tools track KPIs, staff efficiency, and identify opportunities for improvement."
              },
              {
                icon: Zap,
                title: "Mobile Access",
                description: "Native mobile apps keep your team connected with schedules, updates, and instant notifications."
              }
            ].map((benefit, index) => (
                             <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                 viewport={{ once: true }}
                 whileHover={{ y: -5, scale: 1.02 }}
                 className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
               >
                                 <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                   <benefit.icon className="w-6 h-6 text-teal-600" />
                 </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

             {/* CTA Section */}
       <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
         <div className="container mx-auto max-w-4xl text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
             className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl"
           >
             <motion.h2 
               className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
             >
               Ready to Revolutionize Your Workforce Management?
             </motion.h2>
             <motion.p 
               className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               viewport={{ once: true }}
             >
               Get early access to StaffGenie and receive exclusive launch pricing, premium features, and priority support. Limited spots available.
             </motion.p>
             
             <motion.div 
               className="mb-8 md:mb-12"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
             >
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
               >
                 <Button
                   size="lg"
                   onClick={() => setIsWaitlistModalOpen(true)}
                   className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium py-4 px-12 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                 >
                   <Target className="w-5 h-5 mr-2" />
                   Join Waitlist Now
                   <ArrowRight className="w-5 h-5 ml-2" />
                 </Button>
               </motion.div>
             </motion.div>
             
             <motion.div 
               className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 text-gray-500"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               viewport={{ once: true }}
             >
               {[
                 "Priority Platform Access",
                 "Premium Features Included", 
                 "Dedicated Support"
               ].map((feature, index) => (
                 <motion.div 
                   key={index}
                   className="flex items-center justify-center space-x-2"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.2 }}
                 >
                   <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                   <span className="text-sm font-medium">{feature}</span>
                 </motion.div>
               ))}
             </motion.div>
           </motion.div>
         </div>
       </section>

             {/* Footer */}
       <footer className="py-12 md:py-16 px-4 md:px-6 text-gray-900" style={{ backgroundColor: 'rgb(215, 224, 226)' }}>
         <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
             <div className="md:col-span-2">
               <div className="flex items-center mb-6">
                 <div className="h-16 flex items-center justify-center">
                   <Image 
                     src="/staffgenie_logo.png" 
                     alt="StaffGenie AI Logo" 
                     width={64} 
                     height={64}
                     className="h-16 w-auto"
                   />
                 </div>
               </div>
               <p className="text-gray-700 mb-6 max-w-md">
                 Globzones Trading Private Limited – StaffGenie AI automates smarter, optimizes faster, and grows stronger with AI-powered workforce management.
               </p>
                               <div className="text-sm text-gray-600 space-y-1 mb-6">
                  <p>GST Number: 27AAJCG5239M1Z3</p>
                  <p>CIN: U52399MH2022PTC374753</p>
                </div>
             </div>

             <div>
               <h4 className="font-semibold mb-4 text-gray-900">Navigation</h4>
               <ul className="space-y-3 text-gray-700">
                 <li><a href="#services" className="hover:text-gray-900 transition-all duration-300 hover:translate-x-1">Services</a></li>
                 <li><a href="#process" className="hover:text-gray-900 transition-all duration-300 hover:translate-x-1">Process</a></li>
                 <li><a href="#benefits" className="hover:text-gray-900 transition-all duration-300 hover:translate-x-1">Benefits</a></li>
               </ul>
             </div>

             <div>
               <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>
               <ul className="space-y-3 text-gray-700">
                 <li className="flex items-center space-x-2 hover:text-gray-900 transition-colors">
                   <Mail className="w-4 h-4 flex-shrink-0" />
                   <span className="text-sm">hello@staffgenieai.com</span>
                 </li>
                 <li className="flex items-center space-x-2 hover:text-gray-900 transition-colors">
                   <MapPin className="w-4 h-4 flex-shrink-0" />
                   <span className="text-sm">New Silver Star, 502, Malwani Post Office, Malwani-5, Malad West, Mumbai 400095</span>
                 </li>
               </ul>
             </div>
           </div>

           <div className="border-t border-gray-600 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
             <p className="mb-4 md:mb-0">© 2025 Globzones Trading Private Limited. All rights reserved.</p>
             <div className="flex items-center space-x-2">
               <Shield className="w-4 h-4" />
               <span>Enterprise-grade security</span>
             </div>
           </div>
         </div>
       </footer>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  )
}
