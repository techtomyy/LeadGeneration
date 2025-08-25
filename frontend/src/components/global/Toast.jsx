import { useEffect } from 'react';

export default function Toast({ message, type = 'success', isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto hide after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? '✓' : '✕';

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}>
        <div className="text-xl font-bold">{icon}</div>
        <div className="flex-1">
          <p className="font-medium">
            {type === 'success' ? 'Success!' : 'Error!'}
          </p>
          <p className="text-sm opacity-90">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
}
