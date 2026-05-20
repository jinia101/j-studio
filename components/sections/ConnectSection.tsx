"use client";

import { useState } from "react";
import type { FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ConnectSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "failed to send message");
      }

      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "something went wrong";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {formSubmitted ? (
        <div
          style={{
            border: "1px solid var(--border-color)",
            borderRadius: "4px",
            padding: "24px",
            backgroundColor: "var(--highlight-bg)",
            textAlign: "center",
            animation: "contentFadeIn 0.3s var(--transition-bezier)",
          }}
        >
          <h3
            style={{
              fontSize: "1.05rem",
              fontWeight: "600",
              textTransform: "lowercase",
              margin: "0 0 8px 0",
            }}
          >
            📨 message sent successful &rarr;
          </h3>
          <p
            style={{ fontSize: "0.85rem", textTransform: "lowercase" }}
            className="muted-text"
          >
            your technical query has been signed and injected. i will respond to
            your return coordinates swiftly.
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className="brutalist-btn"
            style={{
              marginTop: "16px",
              padding: "8px 16px",
              fontSize: "0.75rem",
            }}
          >
            send another message &rarr;
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {errorMessage && (
            <div
              style={{
                border: "1px solid rgba(220, 38, 38, 0.3)",
                borderRadius: "4px",
                padding: "12px 16px",
                backgroundColor: "rgba(220, 38, 38, 0.05)",
                fontSize: "0.85rem",
                textTransform: "lowercase",
                color: "var(--text-color)",
              }}
            >
              ⚠ {errorMessage}
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <label
              htmlFor="contact-name"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                fontWeight: "500",
                textTransform: "lowercase",
              }}
            >
              name:
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="e.g., dev team leader / founder"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="brutalist-input"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <label
              htmlFor="contact-email"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                fontWeight: "500",
                textTransform: "lowercase",
              }}
            >
              email:
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="e.g., engineer@client.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="brutalist-input"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <label
              htmlFor="contact-message"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                fontWeight: "500",
                textTransform: "lowercase",
              }}
            >
              message:
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              placeholder="state your technical request, project timeline, or system specifications..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="brutalist-input"
              style={{ resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="brutalist-btn"
          >
            {isSubmitting ? "dispatching..." : "send →"}
          </button>
        </form>
      )}
    </>
  );
}
