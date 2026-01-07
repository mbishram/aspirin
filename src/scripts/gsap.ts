/**
 * Initialize GSAP
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Set up smooth scrolling
 */
ScrollSmoother.create({});
