// Centred section title.
export default function Title({ children, sub }) {
  return (
    <div className="title reveal">
      <h2>{children}</h2>
      <div className="uline" />
      {sub && <p>{sub}</p>}
    </div>
  );
}

// Left-aligned section title with an optional button on the right.
export function SecHead({ children, sub, action }) {
  return (
    <div className="sec-head reveal">
      <h2>{children}</h2>
      {action}
      {sub && <p>{sub}</p>}
    </div>
  );
}
