export default function PageBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(180deg, #0e1526 0%, #0a0e1a 45%, #0a0e1a 100%)",
      }}
    />
  );
}
