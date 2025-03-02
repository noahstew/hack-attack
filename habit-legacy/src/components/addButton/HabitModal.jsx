import { useState } from 'react';

const HabitModal = ({ isOpen, onClose, onAddHabit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rewardXp, setRewardXp] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newHabit = {
      id: Date.now(), // Simple unique ID
      title,
      description,
      reward: `${rewardXp}xp`,
      xpAmount: parseInt(rewardXp),
      streak: 0,
    };

    onAddHabit(newHabit);

    // Reset form
    setTitle('');
    setDescription('');
    setRewardXp(50);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-50">
      <div className="bg-[#17153b] border border-[#433d8b] rounded-lg p-6 w-full max-w-md shadow-xl op">
        <h2 className="text-2xl font-bold mb-4 text-[#c8acd6]">
          Add New Habit
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#c8acd6] text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              className="button w-full mb-2 text-[#c8acd6] p-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Habit Title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#c8acd6] text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              className="button w-full mb-2 text-[#c8acd6] p-2 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your habit"
              rows={3}
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#c8acd6] text-sm font-bold mb-2">
              XP Reward
            </label>
            <div className="flex items-center">
              <input
                type="range"
                min="10"
                max="200"
                step="10"
                value={rewardXp}
                onChange={(e) => setRewardXp(e.target.value)}
                className="w-full mr-4"
              />
              <span className="text-[#c8acd6] font-bold">{rewardXp}xp</span>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="button mr-4" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="button button-success">
              Add Habit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HabitModal;
