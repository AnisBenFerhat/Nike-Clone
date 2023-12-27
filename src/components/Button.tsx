import React from 'react';

interface ButtonProps {
  label: string;
  iconUrl: string;
}

const Button: React.FC<ButtonProps> = ({ label, iconUrl }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-x-coral-red'>
      {label}
      <img src={iconUrl} alt='arrow right icon' className='ml-2 rounded-full w-5 h-5' />
    </button>
  );
};

export default Button;