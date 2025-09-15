import { Link, useLocation } from 'react-router-dom';
import { FiAlertTriangle, FiRefreshCw, FiHome, FiClipboard } from 'react-icons/fi';

export default function CheckoutFailed() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const reason = params.get('reason') || 'We could not complete your payment.';
  const reference = params.get('reference') || '';

  const fallbackHelp = 'If you were charged, the amount will be reversed automatically or reflected in your order shortly.';

  return (
    <main className="min-h-[70vh] px-4 pt-[5rem] lg:pt-[8rem] font-montserrat flex items-start">
      <div className="w-full max-w-2xl mx-auto">
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-6 sm:px-8 bg-gradient-to-r from-rose-50 to-amber-50">
            <div className="flex items-center gap-3">
              <span className="text-rose-600"><FiAlertTriangle size={28} /></span>
              <h1 className="text-[1.5rem] sm:text-[1.875rem] font-bold text-gray-900">Payment failed</h1>
            </div>
            <p className="mt-2 text-gray-700">{reason}</p>
          </div>

          <div className="px-6 py-6 sm:px-8">
            <dl className="grid grid-cols-1 gap-4">
              {reference && (
                <div className="p-3 rounded-lg bg-gray-50">
                  <dt className="text-xs uppercase tracking-wide text-gray-500">Reference</dt>
                  <dd className="mt-1 flex items-center gap-2 text-gray-900 break-all">
                    <span>{reference}</span>
                    <button onClick={() => navigator.clipboard.writeText(reference)} className="ml-auto inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-200 hover:bg-white">
                      <FiClipboard /> Copy
                    </button>
                  </dd>
                </div>
              )}
            </dl>

            <p className="mt-4 text-sm text-gray-600">{fallbackHelp}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/checkout" className="inline-flex items-center justify-center gap-2 rounded-md bg-rose-600 text-white px-4 py-2 hover:bg-rose-700 transition">
                <FiRefreshCw /> Try again
              </Link>
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