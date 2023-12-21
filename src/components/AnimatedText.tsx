import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay: number;
  className?: string;
}

export default function AnimatedText({
  text,
  delay,
  className,
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: delay, ease: "easeIn" }}
      className={`${className}`}
    >
      <span>{text}</span>
    </motion.div>
  );
}
