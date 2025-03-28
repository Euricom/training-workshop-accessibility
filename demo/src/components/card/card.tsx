import { Link } from "./link";
import { Title } from "./title";

type Props = {
  children: React.ReactNode;
};

export const Card = (props: Props) => {
  const { children } = props;

  return (
    <section className="flex flex-col items-start gap-2 rounded-2xl border-2 border-shark-700 bg-shark-950 p-4">
      {children}
    </section>
  );
};

Card.Title = Title;
Card.Link = Link;
