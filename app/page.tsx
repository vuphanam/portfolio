"use client";

import { useState } from "react";
import HomePage from "@/components/Home/HomePage";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Page() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Failed to send message.");
      }

      setStatusMessage("Your message was sent successfully.");
      setFormData(initialForm);
    } catch (error) {
      setIsError(true);
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <HomePage
      formData={formData}
      isSubmitting={isSubmitting}
      statusMessage={statusMessage}
      isError={isError}
      onSubmit={onSubmit}
      setFormData={setFormData}
    />
  );
}
