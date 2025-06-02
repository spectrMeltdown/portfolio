import clsx from "clsx";

export default function UICircle({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "mx-[0.22rem] my-2 size-2 rounded-full bg-primary pr-1",
        className,
      )}
      {...props}
    ></div>
  );
}
