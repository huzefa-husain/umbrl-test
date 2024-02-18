import cx from "classnames";
const Button = (props) => {
  const { color = "white", className, disabled, ...rest } = props;

  return (
    <button
      className={cx(
        "rounded-lg font-medium text-[17px] px-8 py-2",
        {
          "pointer-events-none opacity-50": disabled,
          "bg-[#473BF0] text-white": color === "purple",
          "bg-[#473BF0] text-white": color === "lightpurple",
          "border border-black bg-white text-black": color === "white",
        },
        className
      )}
      disabled={disabled}
      {...rest}
    />
  );
};

export default Button;
