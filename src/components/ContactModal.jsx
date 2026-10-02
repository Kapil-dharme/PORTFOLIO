import React, { useState, useEffect } from 'react';

const WEB3FORMS_ACCESS_KEY ='c3fdfadc-67e9-4d24-a547-96deea378c9d';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [formStartTime, setFormStartTime] = useState(Date.now());

  useEffect(() => {
    if (isOpen) {
      setFormStartTime(Date.now());
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (honeypot) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setHoneypot('');
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
      return;
    }

    const timeSpent = Date.now() - formStartTime;
    if (timeSpent < 2000) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          botcheck: false,
          subject: `Portfolio Contact from ${formData.name.trim()}`,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setHoneypot('');

        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 2000);
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to connect to mail service. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-background rounded-3xl border border-outline-variant shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-secondary hover:text-primary hover:bg-surface-container-high transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary">
            Let's Collaborate<span className="text-secondary/50">.</span>
          </h3>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <span className="material-symbols-outlined text-4xl text-emerald-500 mb-2">
              check_circle
            </span>
            <h4 className="text-lg font-bold text-primary">Message Sent!</h4>
            <p className="text-sm text-secondary mt-1">Thank you for reaching out. I'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="bot_field"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: 'none', position: 'absolute', left: '-9999px' }}
            />

            <div>
              <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-4 py-3 text-sm rounded-xl border border-outline-variant bg-background text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
               Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email"
                className="w-full px-4 py-3 text-sm rounded-xl border border-outline-variant bg-background text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message"
                className="w-full px-4 py-3 text-sm rounded-xl border border-outline-variant bg-background text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            {errorMessage && (
              <p className="text-xs text-red-500 font-medium text-center">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-full bg-primary text-on-primary text-label-caps hover:bg-secondary transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}