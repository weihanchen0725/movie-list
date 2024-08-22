import { useEffect, useRef, useState } from "react";
import { Star } from "./Star";

interface StarRatingProps {
  maxRating?: number;
  size?: number;
  color?: string;
  defaultRating?: number;
  onSetRating?: (rating: number) => void;
  addStyle?: object;
  gap?: number;
}

export default function StarRating({
  maxRating = 10,
  size = 24,
  color = "#F8D001",
  defaultRating = 0,
  onSetRating,
  addStyle = {},
  gap = 0,
}: StarRatingProps) {
  const [rating, setRating] = useState<number>(defaultRating);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const containerRef = useRef<HTMLUListElement>(null);

  function handleRating(rating: number) {
    setRating(rating);
    // optional callback
    onSetRating?.(rating);
  }

  const handleKeyDown = (event: React.KeyboardEvent<Element>) => {
    if (event.key === "Enter") {
      containerRef.current?.focus();

      const newRating = hoverRating > 0 ? hoverRating : rating;
      setRating(newRating);
      // optional callback
      onSetRating?.(newRating);
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && containerRef.current) {
        containerRef.current.focus();
      }
    };
    document.addEventListener("keydown", handleGlobalKeyDown);

    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const starContainerStyle = {
    display: "flex",
    margin: 0,
    padding: 0,
    gap: `${gap}px`,
    listStyle: "none",
    ...addStyle,
  };

  return (
    <ul
      style={starContainerStyle}
      tabIndex={0}
      aria-label={`${rating} stars rating`}
      role="radiogroup"
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          value={i + 1}
          maxRating={maxRating}
          size={size}
          color={color}
          full={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
          onRate={() => handleRating(i + 1)}
          onHoverIn={() => setHoverRating(i + 1)}
          onHoverOut={() => setHoverRating(0)}
          onEnterKeyDown={handleKeyDown}
        />
      ))}
    </ul>
  );
}
