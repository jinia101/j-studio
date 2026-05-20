export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "48px",
        borderTop: "1px solid var(--border-color)",
        paddingTop: "20px",
        textAlign: "center",
        fontFamily: "var(--font-display)",
        fontSize: "0.75rem",
        textTransform: "lowercase",
      }}
      className="muted-text"
    >
      <p>&copy; 2026 jinia singha. all rights controlled.</p>
      <p style={{ marginTop: "4px", fontSize: "0.7rem", opacity: 0.6 }}>
        built with intent
      </p>
    </footer>
  );
}
