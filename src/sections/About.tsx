import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motionVariants'

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto p-6 grid md:grid-cols-3 gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="col-span-1"
        >
          <img
            src="/profile.jpg"
            alt="Madhav Pandey - PCB Designer"
            className="rounded-2xl w-56 h-56 object-cover"
            width="392"
            height="398"
            loading="lazy"
          />
        </motion.div>

        <div className="md:col-span-2">
          <SectionTitle subtitle="PCB design expertise">About Me</SectionTitle>
          <p className="text-slate-300 font-medium">
            Electronics Engineer, PCB Designer, Hardware Developer
          </p>

          <p className="text-slate-300 mt-4">
            Are you looking for a seasoned Electronics and Electrical Design Engineer to bring your hardware ideas to life? You are in the right place!
          </p>

          <p className="text-slate-300 mt-4">
            I offer exceptional, production-ready PCB design services tailored to your specific requirements. With over 9 years of rich industry experience and a track record of successfully delivering 450+ PCB designs, I specialize in turning complex concepts into high-performance, reliable hardware.
          </p>

          <p className="text-slate-300 mt-4">
            From compact microcontrollers and power electronics to high-speed digital boards and RF designs with impedance-controlled routing, I ensure your product is engineered to perfection.
          </p>

          <h3 className="text-slate-200 font-semibold mt-6 mb-3">What I Deliver With Every Project:</h3>
          <ol className="text-slate-300 list-decimal list-inside space-y-2">
            <li><strong>Circuit Schematic:</strong> Well-structured, clean, and professional circuit diagrams.</li>
            <li><strong>Reverse Engineering:</strong> Accurate recreation and analysis of existing hardware from physical boards and reference designs.</li>
            <li><strong>PCB Layout:</strong> Optimized component placement and routing for signal and power integrity.</li>
            <li><strong>Production Files:</strong> Standard Gerber files (RS-274X/X2) and NC Drill files.</li>
            <li><strong>Bill of Materials (BOM):</strong> Comprehensive component list with manufacturer part numbers (MPNs) and sourcing links.</li>
            <li><strong>Manufacturing Designators:</strong> Assembly layouts and Pick &amp; Place files for automated SMT assembly.</li>
            <li><strong>3D Models:</strong> Realistic 3D STEP/OBJ files for mechanical integration.</li>
          </ol>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <Stat label="Years of Experience" value={9} />
            <Stat label="PCB Designs Delivered" value={450} />
            <Stat label="Industries Served" value={2} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="glass p-4 rounded-lg text-center"
    >
      <div className="text-2xl font-bold">{value}+</div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  )
}
