export interface HamburgerButtonProps {
  active: boolean;
  onClick(): void;
}

const HamburgerButton = ({ active, onClick }: HamburgerButtonProps) => {
  return (
    <button
      className={`hamburger${active ? " hamburger--active" : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerButton;
