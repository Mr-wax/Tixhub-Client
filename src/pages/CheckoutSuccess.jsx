import { useMemo } from 'react';

export default function CheckoutSuccess() {
  const params = new URLSearchParams(location.search);
  const ticketId = params.get('ticketId');
  const event = params.get('event');
  const order = params.get('order');
  const email = params.get('email');

  const heading = useMemo(() => (event ? `Ticket confirmed: ${event}` : 'Payment successful'), [event]);

  return (
    <main className="max-w-xl mx-auto p-6 font-montserrat pt-[5rem] lg:pt-[8rem]">
      <h1 className="text-[2rem] lg:text-[3rem] font-bold mb-3">{heading}</h1>
      <div className="rounded border p-4 bg-white shadow">
        {order && <p><strong>Order:</strong> {order}</p>}
        {ticketId && <p><strong>Ticket ID:</strong> {ticketId}</p>}
        {email && <p><strong>Sent to:</strong> {email}</p>}
        <p className="mt-3 text-sm text-gray-600">Your e‑ticket PDF has been emailed.</p>
      </div>
      <a className="inline-block mt-6 text-blue-600" href="/tickets">View my tickets</a>
    </main>
  );
}