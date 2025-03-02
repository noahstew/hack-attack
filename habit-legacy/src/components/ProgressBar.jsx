function ProgressBar({ max, current }) {
  const percentage = Math.min((current / max) * 100, 100); // Ensure it doesn't exceed 100%

  return (
    <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-4 bg-green-500 transition-all duration-300 rounded-lg"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;
