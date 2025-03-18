import { BreadcrumbDivider } from "./breadcrumb-divider";

type Props = {
  children: string;
  href: string;
  isCurrentPage?: boolean;
};

export const BreadcrumbItem = (props: Props) => {
  const { children, href, isCurrentPage } = props;

  return (
    <>
      <li>
        {isCurrentPage ? (
          <span
            role="link"
            aria-disabled="true"
            aria-current="page"
            className="text-white"
          >
            {children}
          </span>
        ) : (
          <a href={href} className="hover:text-white hover:underline">
            {children}
          </a>
        )}
      </li>
      {!isCurrentPage && <BreadcrumbDivider />}
    </>
  );
};
