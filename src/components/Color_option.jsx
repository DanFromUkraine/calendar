export const Color_option = ({ color, onClick }) => {
    return (
      <span
        onClick={onClick?.bind(null, color)}
        className={`bg-${color} !w-4 h-4 rounded-md border-2 border-gray_v6`}
      ></span>
    );
  };