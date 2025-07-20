"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"
import toast from "react-hot-toast"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast.success("🎉 Successfully joined the waitlist!")
        
        // Reset form after delay
        setTimeout(() => {
          setFormData({ name: "", email: "", company: "" })
          setIsSuccess(false)
          onClose()
        }, 3000)
      } else {
        toast.error(data.error || "Something went wrong")
      }
    } catch (error) {
      toast.error("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
      <DialogContent className="max-w-md p-0 bg-transparent border-none shadow-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 rounded-2xl border border-white/20 backdrop-blur-xl overflow-hidden"
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Header */}
          <div className="p-8 pb-4">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
              <p className="text-gray-300 text-sm">
                Be the first to experience AI-powered workforce management
              </p>
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 pt-0 text-center"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Welcome aboard! 🎉</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Check your email for confirmation and next steps.
                </p>
                                 <div className="flex items-center justify-center space-x-2 text-teal-400 text-sm">
                   <CheckCircle className="w-4 h-4" />
                   <span>You'll receive early access benefits</span>
                 </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="p-8 pt-0 space-y-4"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Input
                      type="text"
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-teal-400 focus:ring-teal-400/20"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Input
                      type="email"
                      placeholder="Your Email Address *"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-teal-400 focus:ring-teal-400/20"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Input
                      type="text"
                      placeholder="Company Name (Optional)"
                      value={formData.company}
                      onChange={handleInputChange("company")}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-teal-400 focus:ring-teal-400/20"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-2"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center space-x-4 pt-2"
                >
                                     <div className="flex items-center space-x-2 text-teal-400 text-xs">
                     <CheckCircle className="w-3 h-3" />
                     <span>No spam</span>
                   </div>
                   <div className="flex items-center space-x-2 text-teal-400 text-xs">
                     <CheckCircle className="w-3 h-3" />
                     <span>Early access</span>
                   </div>
                   <div className="flex items-center space-x-2 text-teal-400 text-xs">
                     <CheckCircle className="w-3 h-3" />
                     <span>Free setup</span>
                   </div>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
            <div className="absolute top-4 right-4 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
} 