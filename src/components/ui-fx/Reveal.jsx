import { motion } from "framer-motion";

// Standard scroll-reveal wrapper used across all sections.
// Variants: "up" | "fade" | "left" | "right" | "scale"
export const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  amount = 0.25,
  once = true,
  ...rest
}) => {
  const variants = {
    up: { initial: { opacity: 0, y: 32 }, in: { opacity: 1, y: 0 } },
    fade: { initial: { opacity: 0 }, in: { opacity: 1 } },
    left: { initial: { opacity: 0, x: -40 }, in: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, in: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.92 }, in: { opacity: 1, scale: 1 } },
  };
  const v = variants[variant] || variants.up;
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.in}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// Stagger children container
export const StaggerGroup = ({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  amount = 0.2,
  once = true,
}) => (
  <motion.div
    initial="initial"
    whileInView="in"
    viewport={{ once, amount }}
    transition={{ staggerChildren: stagger, delayChildren: delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "", variant = "up" }) => {
  const variants = {
    up: { initial: { opacity: 0, y: 24 }, in: { opacity: 1, y: 0 } },
    scale: { initial: { opacity: 0, scale: 0.94 }, in: { opacity: 1, scale: 1 } },
    fade: { initial: { opacity: 0 }, in: { opacity: 1 } },
  };
  return (
    <motion.div
      variants={variants[variant] || variants.up}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
