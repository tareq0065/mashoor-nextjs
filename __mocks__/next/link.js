const NextLink = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);
export default NextLink;
