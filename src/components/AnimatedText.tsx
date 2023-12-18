import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay: number;
}

export default function AnimatedText({ text, delay }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: delay, ease: "easeIn" }}
    >
      <span>{text}</span>
    </motion.div>
  );
}
