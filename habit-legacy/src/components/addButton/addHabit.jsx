import { useState } from 'react';
import HabitModal from './HabitModal';

export default function AddHabit({ onAddHabit }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddHabit = (newHabit) => {
        onAddHabit(newHabit);
        setIsModalOpen(false);
    };

    return (
        <>
            <div 
                className="bg-white rounded-full fixed bottom-15 right-57 p-4 flex justify-center items-center cursor-pointer"
                style={{
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    boxShadow: isHovered ? '0 8px 20px rgba(0, 0, 0, 0.3)' : '0 4px 10px rgba(0, 0, 0, 0.2)',
                    border: '7px solid #433d8b', // Thick border in theme color
                    width: '60px',
                    height: '60px'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleOpenModal}
            >
                <img src="logo/LogoIcon.png" alt="Add habit" width={40} height={40} />
            </div>

            <HabitModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddHabit={handleAddHabit}
            />
        </>
    );
}

