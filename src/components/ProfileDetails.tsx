import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProfileDetailsProps {
  profile: {
    id: number;
    title: string;
    percentage: number;
    description: string;
    detailedDescription: string;
    color: string;
  } | null;
}

const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  if (!profile) {
    return (
      <Card className="h-full flex items-center justify-center bg-gray-50">
        <CardContent className="text-center">
          <Icon
            name="MousePointer"
            className="mx-auto mb-4 text-gray-400"
            size={48}
          />
          <p className="text-gray-500 font-source-sans">
            Выберите профиль для просмотра подробной информации
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-montserrat text-xl">
            {profile.title}
          </CardTitle>
          <Badge
            variant="secondary"
            className="text-white font-semibold text-lg px-3 py-1"
            style={{ backgroundColor: profile.color }}
          >
            {profile.percentage}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Краткое описание</h4>
          <p className="text-gray-600 font-source-sans leading-relaxed">
            {profile.description}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">
            Подробная характеристика
          </h4>
          <p className="text-gray-600 font-source-sans leading-relaxed">
            {profile.detailedDescription}
          </p>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="BarChart3" className="text-indigo-600" size={20} />
            <span className="font-semibold text-gray-800">
              Статистическая значимость
            </span>
          </div>
          <p className="text-sm text-gray-600 font-source-sans">
            Данный профиль представляет {profile.percentage}% от общей выборки
            мужчин согласно агрегированным данным исследования.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
