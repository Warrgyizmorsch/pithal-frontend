import { Pickaxe, Gem, Factory, HardHat, Recycle, Truck, Gauge, Wrench, BookOpen, TrendingUp, Cog, LayoutDashboard, FileText, Award, GraduationCap } from "lucide-react";
import React from "react";

export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  date: string;
  read: string;
  img: string;
  featured?: boolean;
  large?: boolean;
  views?: string;
  category?: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-crusher",
    tag: "CRUSHING SOLUTIONS",
    title: "How to Choose the Right Crusher for Your Application",
    desc: "A complete guide to selecting the right crusher based on material type, capacity, operating conditions and total cost of ownership.",
    date: "May 20, 2024",
    read: "8 min read",
    img: "/blogpageimg/crusherguide.jpg",
    featured: true,
    large: true,
    views: "12.4K",
    category: "Crushing Solutions",
    content: `
## Introduction
Selecting the right crusher is one of the most critical decisions in any aggregate, mining, or recycling operation. The right equipment can significantly improve efficiency, reduce downtime, and lower the total cost of ownership. Conversely, the wrong crusher can lead to endless maintenance issues and bottleneck your entire plant.

### 1. Understand Your Material
The first step in choosing a crusher is analyzing the material you intend to crush. Consider the following:
- **Hardness & Abrasiveness:** Extremely hard or abrasive materials (like granite or basalt) typically require compression crushers (Jaw or Cone). Softer materials (like limestone) are well-suited for impact crushers (HSI).
- **Moisture Content:** Sticky or wet materials can easily clog certain crushers. Special configurations or feeders might be necessary.
- **Feed Size:** The maximum size of the raw material dictates the size of the feed opening required.

### 2. Determine Required Capacity
Your crusher must be able to handle the target throughput (tons per hour). Always build in a buffer for peak loads and future expansion. Remember that capacity is closely tied to the discharge setting (Closed Side Setting - CSS).

### 3. Final Product Requirements
What are you trying to produce?
- If you need a specific cubical shape for concrete or asphalt aggregates, an impact crusher (VSI or HSI) might be required in the secondary or tertiary stages.
- If shape is less critical and you need maximum reduction ratio, a cone crusher is highly efficient.

### 4. Total Cost of Ownership
Don't just look at the initial purchase price. Factor in:
- Energy consumption
- Wear parts (liners, blow bars, mantles)
- Maintenance accessibility
- Expected lifespan of the equipment

### Conclusion
There is no "one size fits all" crusher. By carefully evaluating your material, capacity needs, and end-product specifications, you can choose the crusher that will deliver the best return on investment for your specific application.
    `,
  },
  {
    slug: "maximizing-plant-efficiency",
    tag: "PLANT OPTIMIZATION",
    title: "Maximizing Plant Efficiency: Key Strategies That Work",
    desc: "Explore proven strategies to improve throughput, reduce operational costs and enhance overall plant performance.",
    date: "May 15, 2024",
    read: "6 min read",
    img: "/blogpageimg/crushersection.jpg",
    featured: false,
    large: false,
    views: "9.8K",
    category: "Plant Optimization",
    content: `
## Introduction
In the competitive world of aggregates and mining, plant efficiency is the key to profitability. Even minor improvements in throughput or slight reductions in downtime can translate to massive financial gains over a year.

### Strategy 1: Optimize the Feed
A crusher works best when it is choke-fed (kept consistently full). This maximizes inter-particle crushing, improves the shape of the final product, and distributes wear evenly across the liners. Use automated feeders and surge piles to ensure a steady, consistent feed rate.

### Strategy 2: Regular Calibration
As wear parts degrade, the Closed Side Setting (CSS) of your crushers will change. This alters your product gradation and can overload secondary circuits. Regularly check and calibrate the CSS to maintain optimal performance.

### Strategy 3: Upgrading Screening Efficiency
Screens are often the bottleneck in a plant. Ensure your screens have the right media (wire, polyurethane, or rubber) for the material and moisture content. Adjust the amplitude and stroke to prevent pegging and blinding.

### Strategy 4: Automation and Monitoring
Modern plants utilize advanced telemetry and automation. By monitoring motor loads, temperatures, and vibrations in real-time, operators can make micro-adjustments to maximize throughput and prevent catastrophic failures before they occur.
    `,
  },
  {
    slug: "reducing-downtime-in-mining",
    tag: "MINING OPERATIONS",
    title: "Reducing Downtime in Mining Operations",
    desc: "Understand the common causes of equipment downtime and how proactive maintenance can minimize disruptions.",
    date: "May 10, 2024",
    read: "7 min read",
    img: "/blogpageimg/miningoperation.jpg",
    featured: false,
    large: false,
    views: "8.4K",
    category: "Mining Operations",
    content: `
## The True Cost of Downtime
In mining operations, downtime doesn't just mean lost production; it means idle crews, disrupted logistics, and missed targets. Reducing unplanned downtime is a primary objective for any successful mine manager.

### 1. Implement Predictive Maintenance
Move away from reactive maintenance (fixing things when they break) and even preventive maintenance (fixing things on a schedule). Adopt predictive maintenance using sensors and data analytics to predict exactly when a component will fail, allowing you to replace it during planned shutdowns.

### 2. Comprehensive Operator Training
The first line of defense against equipment failure is the operator. Operators who understand the machinery can spot unusual noises, vibrations, or temperature spikes early. Invest heavily in ongoing training.

### 3. Keep Critical Spares On-Site
Supply chain disruptions can turn a minor repair into a weeks-long shutdown. Identify critical wear parts and long-lead items for your primary crushers and conveyors, and ensure they are always stocked on-site.

### 4. Improve Site Conditions
Poor haul roads, excessive dust, and inadequate water management take a massive toll on mobile and stationary equipment. Improving general site conditions directly extends the lifespan of your machinery.
    `,
  },
  {
    slug: "conveyor-system-optimization",
    tag: "MATERIAL HANDLING",
    title: "Conveyor System Optimization for Better Performance",
    desc: "Learn proper conveyor design, maintenance and monitoring to improve efficiency and reduce downtime.",
    date: "May 5, 2024",
    read: "5 min read",
    img: "/blogpageimg/materialhandling.jpg",
    views: "7.1K",
    category: "Material Handling",
    content: `
## Conveyors: The Arteries of Your Plant
Conveyors are often overlooked until they break down. However, they are the arteries of any crushing plant. Optimizing them is essential for smooth operations.

### Belt Tracking and Alignment
Misaligned belts cause uneven wear, material spillage, and structural damage. Regularly inspect idlers, pulleys, and the belt itself to ensure perfect tracking. Install self-aligning idlers where necessary.

### Skirting and Sealing
Material spillage at transfer points wastes product and creates hazardous working conditions. Implement effective skirting and sealing systems to contain the material and reduce dust emissions.

### Drive System Efficiency
Older, inefficient motors and gearboxes consume excessive power and require frequent maintenance. Consider upgrading to modern, high-efficiency drive systems with variable frequency drives (VFDs) for better control and energy savings.
    `,
  },
  {
    slug: "essential-maintenance-practices",
    tag: "MAINTENANCE",
    title: "Essential Maintenance Practices for Longer Equipment Life",
    desc: "Follow these proven maintenance routines to extend equipment lifespan, reduce costs and ensure reliable operations.",
    date: "April 28, 2024",
    read: "9 min read",
    img: "/blogpageimg/maintenancechecklist.jpg",
    views: "6.2K",
    category: "Maintenance",
    content: `
## Maintenance is an Investment
Good maintenance practices should be viewed as an investment in asset longevity, not a sunk cost. Here are the essentials.

### Daily Inspections
Before startup, operators should perform a walk-around inspection. Look for fluid leaks, loose bolts, unusual wear on belts, and ensure all safety guards are in place.

### Lubrication Management
Improper lubrication is a leading cause of bearing failure. Establish a strict lubrication schedule using the correct grade of grease or oil specified by the manufacturer. Consider automated lubrication systems for critical components.

### Wear Part Rotation
Don't wait for wear parts to fail completely. In cone and jaw crushers, regularly inspect the wear profile of the mantles, bowl liners, and jaw dies. Rotating or flipping these parts (where applicable) can significantly extend their usable life.

### Cleanliness
A clean machine runs cooler and is easier to inspect. Regularly remove built-up material around motors, drives, and moving parts.
    `,
  }
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured || post.large);
export const getLatestArticles = () => blogPosts.slice(0, 3);
export const getTrendingPosts = () => blogPosts.map((post, index) => ({ ...post, num: `0${index + 1}` }));
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
