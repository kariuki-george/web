export interface ProductCountProps
  extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
}

const ProductCount: React.FC<ProductCountProps> = ({
  count,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={[
        "w-full text-2xs uppercase text-primary",
        className ?? "",
      ].join(" ")}
    >
      {"productCountLabel"}
    </div>
  );
};

export default ProductCount;
