import { useMemo } from "react";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: ChartData[];
  size?: number;
}

const PieChart = ({ data, size = 300 }: PieChartProps) => {
  const { paths, centerX, centerY, radius } = useMemo(() => {
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 20;

    let cumulativePercentage = 0;
    const paths = data.map((item) => {
      const startAngle = cumulativePercentage * 2 * Math.PI;
      const endAngle = (cumulativePercentage + item.value / 100) * 2 * Math.PI;

      const x1 = centerX + radius * Math.cos(startAngle);
      const y1 = centerY + radius * Math.sin(startAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);

      const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

      const pathData = [
        `M ${centerX} ${centerY}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
        "Z",
      ].join(" ");

      cumulativePercentage += item.value / 100;

      return {
        path: pathData,
        color: item.color,
        name: item.name,
        value: item.value,
      };
    });

    return { paths, centerX, centerY, radius };
  }, [data, size]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <svg width={size} height={size} className="drop-shadow-sm">
        {paths.map((segment, index) => (
          <path
            key={index}
            d={segment.path}
            fill={segment.color}
            className="hover:opacity-80 transition-opacity duration-200"
            stroke="white"
            strokeWidth="2"
          />
        ))}
      </svg>
      <div className="text-center">
        <h3 className="font-montserrat font-semibold text-gray-800">
          Распределение профилей
        </h3>
        <p className="text-sm text-gray-600 font-source-sans">
          Всего категорий: {data.length}
        </p>
      </div>
    </div>
  );
};

export default PieChart;
