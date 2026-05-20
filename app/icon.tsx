import { ImageResponse } from "next/og";

// Image metadata for the app icon
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 20,
        background: "#0c0c0e",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fafafa",
        fontWeight: "700",
        fontFamily: "monospace",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "6px",
      }}
    >
      JS
    </div>,
    // ImageResponse options
    {
      // Re-use the size config to set the ImageResponse's dimensions
      ...size,
    },
  );
}
