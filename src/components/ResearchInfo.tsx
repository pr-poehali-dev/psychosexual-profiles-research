import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ResearchInfo = () => {
  return (
    <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Icon name="BookOpen" className="text-indigo-600" size={24} />
          <CardTitle className="font-montserrat text-xl">
            О исследовании
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Автор</h4>
          <p className="text-sm text-gray-600 font-source-sans">
            Александр Романов — независимый исследователь,
            <br />
            проект Intellectus — Anima
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Методология</h4>
          <p className="text-sm text-gray-600 font-source-sans leading-relaxed">
            Модель синтезирует данные из различных источников, включая отчёты
            Кинси (1948), сетку сексуальной ориентации Кляйна (1978) и
            современные исследования мужской сексуальности.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Цель</h4>
          <p className="text-sm text-gray-600 font-source-sans leading-relaxed">
            Представить эмпирическую модель, отражающую сложность и разнообразие
            мужской сексуальной ориентации и поведения.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchInfo;
