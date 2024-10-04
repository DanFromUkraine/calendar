export default function ErrorWrapper({ children }) {
  return children ? (
    <span className="!text-red-500 text-sm font-medium;">{children}</span>
  ) : (
    <></>
  );
}
