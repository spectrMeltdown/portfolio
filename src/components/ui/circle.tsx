import clsx from "clsx";
import { motion } from "motion/react";

export default function UICircle({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      transition={{ duration: 0.6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div
        className={clsx(
          "mx-[0.22rem] my-2 size-2 rounded-full bg-primary pr-1",
          className,
        )}
        {...props}
      ></div>
    </motion.div>
  );
}
