"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Building2, Users, Target, ArrowLeft, AlertTriangle, Clock, UserCheck, FileText, Store } from "lucide-react"

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
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              About StaffGenie
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionizing retail workforce management with AI-powered automation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Business Description */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
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
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  StaffGenie AI is a comprehensive platform that optimizes retail staffing through artificial intelligence – 
                  automatically scheduling the right number of employees at the right times, assisting with hiring and training, 
                  and guiding staff in real time.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-teal-600 mr-3" />
                    Problems We Solve
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="bg-teal-50 rounded-full p-2 mt-1 mr-4">
                        <Clock className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Inefficient Scheduling</div>
                        <div className="text-gray-600">Retailers struggle with manual scheduling, leading to overstaffing during slow periods and understaffing during peak times, resulting in 15-20% wasted labor costs.</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-50 rounded-full p-2 mt-1 mr-4">
                        <Users className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Poor Customer Experience</div>
                        <div className="text-gray-600">Inadequate staffing leads to long checkout lines, unattended customers, and reduced sales conversion rates.</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-50 rounded-full p-2 mt-1 mr-4">
                        <UserCheck className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">High Employee Turnover</div>
                        <div className="text-gray-600">Inconsistent schedules, last-minute changes, and poor training contribute to retail's 60% average annual turnover rate.</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-50 rounded-full p-2 mt-1 mr-4">
                        <FileText className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Administrative Burden</div>
                        <div className="text-gray-600">Store managers spend 15+ hours weekly on scheduling, handling time-off requests, and resolving staffing issues instead of focusing on sales and customer service.</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="w-6 h-6 text-teal-600 mr-3" />
                    Target Market
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-teal-50 rounded-full p-2 mr-3">
                          <Store className="w-5 h-5 text-teal-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Small to Medium Retail Businesses</h4>
                      </div>
                      <p className="text-gray-600 ml-14">Boutiques, cafes, grocery stores, and specialty shops with 5-50 employees that lack dedicated HR staff and need efficient workforce management solutions.</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-teal-50 rounded-full p-2 mr-3">
                          <Building2 className="w-5 h-5 text-teal-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Growing Retail Chains</h4>
                      </div>
                      <p className="text-gray-600 ml-14">Multi-location retailers and franchise owners with 50-500 employees who need consistent staffing standards and coordination across locations.</p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600">Total Addressable Market</div>
                        <div className="text-2xl font-bold text-teal-600">$8.2B</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-10"></div>
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Sachin Morajkar"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sachin Morajkar</h3>
                  <div className="text-teal-600 font-medium mb-2">CEO & Co-Founder</div>
                  <div className="text-gray-600 text-sm">Former Director of Operations at Target with 12+ years in retail management. MBA from Wharton with focus on retail innovation and AI applications.</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-10"></div>
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Aditi Anil Uksekar"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Aditi Anil Uksekar</h3>
                  <div className="text-teal-600 font-medium mb-2">CTO & Co-Founder</div>
                  <div className="text-gray-600 text-sm">AI specialist with 10+ years experience at Google and Amazon. Led development of workforce optimization algorithms for enterprise clients.</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-10"></div>
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Mamta Behera"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mamta Behera</h3>
                  <div className="text-teal-600 font-medium mb-2">Head of Product</div>
                  <div className="text-gray-600 text-sm">Former Product Manager at Shopify with expertise in retail tech solutions. Led development of staff management tools used by 10,000+ merchants.</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-10"></div>
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Sushree Sangita Behera"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sushree Sangita Behera</h3>
                  <div className="text-teal-600 font-medium mb-2">Head of Sales</div>
                  <div className="text-gray-600 text-sm">15+ years in SaaS sales with focus on retail technology. Previously led sales teams at Square and Toast, achieving 200% YoY growth.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
