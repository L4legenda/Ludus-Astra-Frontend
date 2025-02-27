"use client"
export function LvlNum({ lvl = 1 }) {
    const getColor = (value) => {
        // Определяем массив из 5 цветов в формате RGB
        const colors = [
            { r: 0, g: 128, b: 0 },    // Зеленый
            { r: 173, g: 255, b: 47 }, // Салатовый
            { r: 255, g: 255, b: 0 },  // Желтый
            { r: 255, g: 165, b: 0 },  // Оранжевый
            { r: 255, g: 0, b: 0 }    // Красный
        ];

        // Определяем диапазоны для каждого отрезка
        const ranges = [
            { start: 1, end: 25 },   // От 1 до 25
            { start: 25, end: 50 },  // От 25 до 50
            { start: 50, end: 75 },  // От 50 до 75
            { start: 75, end: 100 }  // От 75 до 100
        ];

        // Находим, в каком диапазоне находится значение
        let rangeIndex = ranges.findIndex(range => value >= range.start && value <= range.end);

        // Если значение выходит за пределы, возвращаем крайний цвет
        if (rangeIndex === -1) {
            if (value < 1) return `rgb(${colors[0].r}, ${colors[0].g}, ${colors[0].b})`;
            if (value > 100) return `rgb(${colors[colors.length - 1].r}, ${colors[colors.length - 1].g}, ${colors[colors.length - 1].b})`;
        }

        // Нормализуем значение в пределах текущего диапазона
        const range = ranges[rangeIndex];
        const normalizedValue = (value - range.start) / (range.end - range.start);

        // Интерполируем между двумя соседними цветами
        const startColor = colors[rangeIndex];
        const endColor = colors[rangeIndex + 1];

        const r = Math.round(startColor.r + (endColor.r - startColor.r) * normalizedValue);
        const g = Math.round(startColor.g + (endColor.g - startColor.g) * normalizedValue);
        const b = Math.round(startColor.b + (endColor.b - startColor.b) * normalizedValue);

        // Возвращаем цвет в формате CSS
        return `rgb(${r}, ${g}, ${b})`;
    }
    const color = getColor(1)
    return (
        <span style={{ color: getColor(lvl) }}>{lvl}</span>
    )
}



