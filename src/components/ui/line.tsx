import clsx from "clsx";
import { motion } from "motion/react";

const UILineVariants = {
  flex: "ml-1.5 flex h-15 items-center gap-5 border-l-2 border-primary pl-10",
  nonFlex: "h-15 inline-block w-1 border-l-2 border-primary",
};

export default function UILine({
  children,
  isFlex = "flex",
  className,
  ...props
}: React.HTMLProps<HTMLDivElement> & {
  children?: React.ReactNode;
  isFlex?: keyof typeof UILineVariants;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      transition={{ duration: 0.6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={clsx(UILineVariants[isFlex], className)} {...props}>
        {children}
      </div>
    </motion.div>
  );
}
