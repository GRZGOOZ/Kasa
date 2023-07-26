import { FaStar } from "react-icons/fa";

export default function Rating({ rating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= rating ? "#FF6060" : "#f6f6f6";
      stars.push(
        <FaStar
          key={i}
          size={24}
          style={{ marginRight: "3px", color: starColor }}
        />
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
}
