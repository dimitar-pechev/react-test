import clsx from "clsx";
import Search from "./search";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}

export function Sex() {
  const text = "some text";

  return (
    <>
      <h2 className={"my-class" + (1 > 2 ? "first-letter:m-2" : "")}>
        some text here
      </h2>
      <h2
        className={clsx("some-class", {
          "outline-inherit": 1 > 2,
        })}
      >
        some {text}
      </h2>
      {text === "some text" ? (
        <Button children={<Search placeholder="" />}></Button>
      ) : (
        <Search placeholder="search text" />
      )}
    </>
  );
}
