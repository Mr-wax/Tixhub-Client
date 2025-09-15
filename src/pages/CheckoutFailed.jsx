export default function CheckoutFailed() {
  const params = new URLSearchParams(location.search);
  const reason = params.get('reason') || 'unknown';
  const reference = params.get('reference') || '';

  return (
    <main className="max-w-xl mx-auto p-6 font-montserrat pt-[5rem] lg:pt-[8rem]">
      <h1 className="text-[2rem] lg:text-[3rem] font-bold mb-3">Payment failed</h1>
      <div className="rounded border p-4 bg-white shadow">
        <p><strong>Reason:</strong> {reason}</p>
        {reference && <p><strong>Reference:</strong> {reference}</p>}
      </div>
      <a className="inline-block mt-6 text-blue-600" href="/checkout">Try again</a>
    </main>
  );
}