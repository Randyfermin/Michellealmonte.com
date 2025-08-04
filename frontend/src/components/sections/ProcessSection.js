/**
 * @file: ProcessSection.js (Enhanced)
 * @path: frontend/src/components/sections/ProcessSection.js
 * @created: 2025-08-03
 * @modified: 2025-08-03
 * @description: Enhanced process section with multiple visual approaches
 * @author: Randolfo Fermin
 * @module: Frontend - Section Components
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserOutlined, 
  EyeOutlined, 
  BulbOutlined, 
  ShoppingOutlined, 
  HeartOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  StarOutlined
} from '@ant-design/icons';
import { PROCESS_STEPS } from '../../utils/constants';

// APPROACH 1: INTERACTIVE STEP-BY-STEP CAROUSEL
const ProcessSectionCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const iconMap = {
    1: <UserOutlined className="text-3xl" />,
    2: <EyeOutlined className="text-3xl" />,
    3: <BulbOutlined className="text-3xl" />,
    4: <ShoppingOutlined className="text-3xl" />,
    5: <HeartOutlined className="text-3xl" />
  };

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-cream to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-cocoa-brown">
            My Proven Process
          </h2>
          <p className="text-xl text-cocoa-brown/70 max-w-3xl mx-auto">
            A systematic approach to transformation that has helped hundreds of clients discover their authentic style.
          </p>
        </motion.div>

        {/* Step Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PROCESS_STEPS.map((step, index) => (
            <button
              key={step.step}
              onClick={() => {
                setActiveStep(index);
                setIsAutoPlaying(false);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeStep === index
                  ? 'bg-yellow-butter text-cocoa-brown shadow-lg scale-105'
                  : 'bg-white text-cocoa-brown/60 hover:bg-yellow-butter/20 shadow-sm'
              }`}
            >
              Step {step.step}
            </button>
          ))}
        </div>

        {/* Active Step Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-yellow-butter to-soft-terracotta p-4 rounded-full mr-4 text-white">
                    {iconMap[PROCESS_STEPS[activeStep].step]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-soft-terracotta mb-1">
                      Step {PROCESS_STEPS[activeStep].step} of {PROCESS_STEPS.length}
                    </div>
                    <h3 className="text-3xl font-bold text-cocoa-brown">
                      {PROCESS_STEPS[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-cocoa-brown/80 mb-8 leading-relaxed">
                  {PROCESS_STEPS[activeStep].description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-cocoa-brown">Key Benefits:</h4>
                  {getStepBenefits(PROCESS_STEPS[activeStep].step).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-cocoa-brown/70">
                      <CheckCircleOutlined className="text-yellow-butter mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="text-center">
                <div className="relative">
                  {/* Progress Ring */}
                  <svg className="w-64 h-64 mx-auto" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#F5F5DC"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="8"
                      strokeDasharray={`${(activeStep + 1) * (251.2 / PROCESS_STEPS.length)} 251.2`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-cocoa-brown mb-2">
                        {iconMap[PROCESS_STEPS[activeStep].step]}
                      </div>
                      <div className="text-2xl font-bold text-cocoa-brown">
                        {((activeStep + 1) / PROCESS_STEPS.length * 100).toFixed(0)}%
                      </div>
                      <div className="text-sm text-cocoa-brown/60">Complete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {PROCESS_STEPS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveStep(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStep ? 'bg-yellow-butter scale-125' : 'bg-cocoa-brown/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// APPROACH 2: VERTICAL STEPPER WITH ANIMATIONS
const ProcessSectionStepper = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const iconMap = {
    1: <UserOutlined className="text-2xl" />,
    2: <EyeOutlined className="text-2xl" />,
    3: <BulbOutlined className="text-2xl" />,
    4: <ShoppingOutlined className="text-2xl" />,
    5: <HeartOutlined className="text-2xl" />
  };

  useEffect(() => {
    if (inView) {
      PROCESS_STEPS.forEach((_, index) => {
        setTimeout(() => {
          setCompletedSteps(prev => new Set([...prev, index]));
        }, index * 800);
      });
    }
  }, [inView]);

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-cocoa-brown">
            Your Transformation Journey
          </h2>
          <p className="text-xl text-cocoa-brown/70">
            Each step is carefully designed to build upon the last, creating lasting change.
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-butter via-soft-terracotta to-rose-dust"></div>

          {/* Steps */}
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -60 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Step Circle */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 transition-all duration-500 ${
                  completedSteps.has(index)
                    ? 'bg-yellow-butter border-yellow-butter text-white shadow-lg scale-110'
                    : 'bg-white border-cocoa-brown/30 text-cocoa-brown/50'
                }`}>
                  {completedSteps.has(index) ? (
                    <CheckCircleOutlined className="text-2xl" />
                  ) : (
                    iconMap[step.step]
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={completedSteps.has(index) ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="ml-8 bg-white rounded-2xl shadow-lg p-6 flex-1 border border-pearl-gray hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-soft-terracotta bg-soft-terracotta/10 px-3 py-1 rounded-full">
                      Step {step.step}
                    </span>
                    <ClockCircleOutlined className="ml-auto text-cocoa-brown/40" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-cocoa-brown mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-cocoa-brown/70 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center text-sm text-cocoa-brown/60">
                    <ClockCircleOutlined className="mr-2" />
                    {getStepDuration(step.step)}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-yellow-butter to-soft-terracotta rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-cocoa-brown mb-4">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-cocoa-brown/80 mb-6">
            Every journey starts with a single step. Let's take that step together.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-cocoa-brown font-semibold px-8 py-3 rounded-full hover:bg-cocoa-brown hover:text-white transition-all duration-300 shadow-lg"
          >
            Start My Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// APPROACH 3: CARDS GRID WITH HOVER INTERACTIONS
const ProcessSectionCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const iconMap = {
    1: <UserOutlined className="text-4xl" />,
    2: <EyeOutlined className="text-4xl" />,
    3: <BulbOutlined className="text-4xl" />,
    4: <ShoppingOutlined className="text-4xl" />,
    5: <HeartOutlined className="text-4xl" />
  };

  const cardColors = [
    'from-yellow-butter to-yellow-butter/80',
    'from-soft-terracotta to-soft-terracotta/80',
    'from-rose-dust to-rose-dust/80',
    'from-cocoa-brown to-cocoa-brown/80',
    'from-cream to-cream/80'
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-soft-ivory to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-cocoa-brown">
            How It Works
          </h2>
          <p className="text-xl text-cocoa-brown/70 max-w-3xl mx-auto">
            My proven 5-step process transforms not just how you look, but how you feel about yourself.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cardColors[index]} opacity-90`}></div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl font-bold text-white/20">
                    {step.step.toString().padStart(2, '0')}
                  </span>
                  <div className="text-white">
                    {iconMap[step.step]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredCard === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <div className="flex items-center text-white font-medium">
                    Learn More
                    <ArrowRightOutlined className="ml-2" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-cocoa-brown mb-4">
              Typical Timeline
            </h3>
            <p className="text-cocoa-brown/70">
              Most transformations are completed within 4-6 weeks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { period: 'Week 1', task: 'Consultation & Analysis', color: 'yellow-butter' },
              { period: 'Week 2', task: 'Strategy Development', color: 'soft-terracotta' },
              { period: 'Week 3-4', task: 'Implementation', color: 'rose-dust' },
              { period: 'Ongoing', task: 'Support & Follow-up', color: 'cocoa-brown' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${item.color} text-white rounded-lg p-4 shadow-md mb-3`}>
                  <div className="text-lg font-bold">{item.period}</div>
                </div>
                <div className="text-sm text-cocoa-brown/70">{item.task}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper Functions
const getStepBenefits = (stepNumber) => {
  const benefits = {
    1: ['Clear understanding of your goals', 'Personalized approach', 'Comfort and trust building'],
    2: ['Discover your best colors', 'Understand your body type', 'Define your style personality'],
    3: ['Custom style roadmap', 'Wardrobe optimization plan', 'Shopping strategy'],
    4: ['Hands-on transformation', 'Professional shopping guidance', 'Wardrobe organization'],
    5: ['Continued confidence', 'Style evolution support', 'Long-term success']
  };
  return benefits[stepNumber] || [];
};

const getStepDuration = (stepNumber) => {
  const durations = {
    1: '60-90 minutes',
    2: '2-3 hours',
    3: '1-2 weeks',
    4: '2-4 weeks',
    5: 'Ongoing'
  };
  return durations[stepNumber] || 'Varies';
};

// Export the preferred approach (you can change this)
const ProcessSection = ProcessSectionCarousel; // Change to ProcessSectionStepper or ProcessSectionCards

export default ProcessSection;

// End of File: ProcessSection.js