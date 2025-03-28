type Props = {
  href: string;
};

export const Link = (props: Props) => {
  const { href } = props;

  return (
    <a
      href={href}
      className="text-euricom-400 hover:underline active:text-euricom-200"
    >
      View example »
    </a>
  );
};
