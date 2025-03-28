type Props = {
  children: React.ReactNode;
};

export const Title = (props: Props) => {
  const { children } = props;

  return <h2 className="mb-2 text-xl font-medium">{children}</h2>;
};
