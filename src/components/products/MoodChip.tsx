import { Link } from "react-router-dom";

interface MoodChipProps {
  id: string;
  name: string;
  emoji: string;
  isActive?: boolean;
}

const MoodChip = ({ id, name, emoji, isActive }: MoodChipProps) => {
  return (
    <Link
      to={`/mood/${id}`}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
        isActive
          ? "bg-primary text-primary-foreground shadow-card"
          : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
      }`}
    >
      <span>{emoji}</span>
      <span>{name}</span>
    </Link>
  );
};

export default MoodChip;
