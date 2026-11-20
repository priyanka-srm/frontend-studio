
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xjywrgwp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <span className="section-eyebrow">06 / CONTACT</span>

        <div className="contact-heading">
          <h2>
            Let's start a
            <br />
            <span>conversation.</span>
          </h2>

          <p>
            Have an opportunity, a project idea, or just want to connect? I'd
            love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <span className="contact-small-heading">CONTACT DETAILS</span>

            <div className="contact-method">
              <span>Email</span>
              <a href="mailto:priyankaswaminathan09@gmail.com">
                priyankaswaminathan09@gmail.com
              </a>
            </div>

            <div className="contact-method">
              <span>GitHub</span>
              <a
                href="https://github.com/priyanka-srm"
                target="_blank"
                rel="noreferrer"
              >
                Explore my repositories ↗
              </a>
            </div>

            <div className="contact-method">
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/priyanka-s-571b9822b/"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me ↗
              </a>
            </div>

            <p className="contact-note">
              Open to frontend opportunities, collaborations, and meaningful
              conversations.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me a little about what you have in mind..."
              required
            />

            {status === "success" && (
              <p role="status">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p role="alert">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send message"}
              {status !== "sending" && (
                <span aria-hidden="true"> ↗</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
