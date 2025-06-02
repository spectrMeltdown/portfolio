import clsx from "clsx";

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
    <div className={clsx(UILineVariants[isFlex], className)} {...props}>
      {children}
    </div>
  );
}
