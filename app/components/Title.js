// Section title with the animated amber gradient underline.
export default function Title({ children, sub }) {
  return (
    <div className="title reveal">
      <h2>{children}</h2>
      <div className="uline" />
      {sub && <p>{sub}</p>}
    </div>
  );
}
