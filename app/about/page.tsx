"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Building2, Users, Rocket, Target, ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-16 flex items-center justify-center">
              <Image 
                src="/staffgenie_logo.png" 
                alt="StaffGenie AI Logo" 
                width={64} 
                height={64}
                className="h-16 w-auto"
              />
            </div>
          </Link>
          
          <Link href="/">
            <Button variant="ghost" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About StaffGenie
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing retail workforce management with AI-powered automation
          </motion.p>
        </div>
      </section>

      {/* Business Description */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <Building2 className="w-8 h-8 text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Business Description</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <p>
                StaffGenie is an innovative AI-powered workforce management platform designed specifically for retail businesses. 
                Our platform transforms how retail operations handle staffing, scheduling, and performance management.
              </p>
              <h3 className="text-xl font-semibold text-gray-900">Problems We Solve</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inefficient manual scheduling processes that waste management time</li>
                <li>Understaffing and overstaffing issues that impact business performance</li>
                <li>Poor staff utilization leading to increased operational costs</li>
                <li>Lack of data-driven insights for workforce optimization</li>
                <li>Complex compliance management for labor laws and regulations</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900">Target Audience</h3>
              <p>
                Our platform serves retail businesses of all sizes, from single-store operations to multi-location chains, 
                including fashion retailers, supermarkets, convenience stores, and specialty retail outlets.
              </p>
            </div>
          </motion.div>

          {/* Team Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership</h3>
                <p className="text-gray-600 mb-4">
                  Our leadership team brings together decades of experience in retail operations, 
                  artificial intelligence, and enterprise software development.
                </p>
                <ul className="space-y-4">
                  <li>
                    <div className="font-semibold text-gray-900">Technical Leadership</div>
                    <div className="text-gray-600">15+ years in AI and ML development</div>
                  </li>
                  <li>
                    <div className="font-semibold text-gray-900">Retail Expertise</div>
                    <div className="text-gray-600">20+ years in retail operations management</div>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Team</h3>
                <p className="text-gray-600 mb-4">
                  Our development team consists of experienced engineers and data scientists 
                  specialized in AI, machine learning, and enterprise software development.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI/ML Engineers</li>
                  <li>• Full-stack Developers</li>
                  <li>• UX/UI Designers</li>
                  <li>• Data Scientists</li>
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Rocket className="w-8 h-8 text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Our Product</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <p>
                StaffGenie is an AI-powered workforce management platform that combines advanced 
                scheduling algorithms with real-time analytics to optimize retail staffing operations.
              </p>
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-powered demand forecasting and automated scheduling</li>
                <li>Real-time performance analytics and reporting</li>
                <li>Mobile-first employee self-service portal</li>
                <li>Integrated compliance management</li>
                <li>Smart shift swapping and time-off management</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900">Development Stage</h3>
              <p>
                StaffGenie is currently in late-stage development, with core features completed and 
                undergoing final testing. We're working closely with select retail partners in our 
                beta program to refine the platform before our full commercial launch.
              </p>
              <div className="mt-8">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                    <Target className="w-4 h-4 mr-2" />
                    Join Our Waitlist
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
