import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  title: string;
  percentage: number;
  description: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

const ProfileCard = ({
  title,
  percentage,
  description,
  color,
  isActive,
  onClick,
}: ProfileCardProps) => {
  return (
    <Card
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
        isActive ? "ring-2 ring-indigo-500 shadow-lg" : ""
      }`}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-montserrat">{title}</CardTitle>
          <Badge
            variant="secondary"
            className="text-white font-semibold"
            style={{ backgroundColor: color }}
          >
            {percentage}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 font-source-sans leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
