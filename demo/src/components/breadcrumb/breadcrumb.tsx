import { BreadcrumbItem } from "./breadcrumb-item";

type Props = {
  items: {
    href: string;
    label: string;
  }[];
};

export const Breadcrumb = (props: Props) => {
  const { items } = props;

  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex items-center text-gray-400">
        {items.map((item, index) => (
          <BreadcrumbItem
            href={item.href}
            isCurrentPage={index === items.length - 1}
          >
            {item.label}
          </BreadcrumbItem>
        ))}
      </ul>
    </nav>
  );
};
