import { useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiCheckCircle, FiHome, FiMail, FiClipboard, FiArrowRight } from 'react-icons/fi';

export default function CheckoutSuccess() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const ticketId = params.get('ticketId');
  const eventName = params.get('event');
  const orderId = params.get('order');
  const email = params.get('email');

  const heading = useMemo(() => (eventName ? `Payment successful` : 'Payment successful'), [eventName]);

  const handleCopy = useCallback(async (text) => {
    try {
      if (!text) return;
      await navigator.clipboard.writeText(text);
      // Optional: you might trigger a toast here if you have a system
    } catch (_) {
      // Silent fail
    }
  }, []);

  return (
    <main className="min-h-[70vh] px-4 pt-[5rem] lg:pt-[8rem] font-montserrat flex items-start">
      <div className="w-full max-w-2xl mx-auto">
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-6 sm:px-8 bg-gradient-to-r from-emerald-50 to-teal-50">
            <div className="flex items-center gap-3">
              <span className="text-emerald-600"><FiCheckCircle size={28} /></span>
              <h1 className="text-[1.5rem] sm:text-[1.875rem] font-bold text-gray-900">{heading}</h1>
            </div>
            {eventName && (
              <p className="mt-2 text-gray-700">Your ticket for <span className="font-semibold">{eventName}</span> is confirmed.</p>)
            }
          </div>

          <div className="px-6 py-6 sm:px-8">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {orderId && (
                <div className="p-3 rounded-lg bg-gray-50">
                  <dt className="text-xs uppercase tracking-wide text-gray-500">Order ID</dt>
                  <dd className="mt-1 flex items-center gap-2 text-gray-900 break-all">
                    <span>{orderId}</span>
                    <button onClick={() => handleCopy(orderId)} className="ml-auto inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-200 hover:bg-white">
                      <FiClipboard /> Copy
                    </button>
                  </dd>
                </div>
              )}
              {ticketId && (
                <div className="p-3 rounded-lg bg-gray-50">
                  <dt className="text-xs uppercase tracking-wide text-gray-500">Ticket ID</dt>
                  <dd className="mt-1 text-gray-900 break-all">{ticketId}</dd>
                </div>
              )}
              {email && (
                <div className="p-3 rounded-lg bg-gray-50 sm:col-span-2">
                  <dt className="text-xs uppercase tracking-wide text-gray-500">Delivery</dt>
                  <dd className="mt-1 flex items-center gap-2 text-gray-900">
                    <FiMail className="text-gray-500" /> E‑ticket sent to <span className="font-medium">{email}</span>
                  </dd>
                </div>
              )}
            </dl>

            <p className="mt-6 text-sm text-gray-600">You’ll also find your tickets in your account. Keep the confirmation email for your records.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/tickets" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 transition">
                View my tickets <FiArrowRight />
              </Link>
              {eventName && (
                <Link to="/find-events" className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 hover:bg-gray-50 transition">
                  Explore more events
                </Link>
              )}
              <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 hover:bg-gray-50 transition">
                <FiHome /> Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}