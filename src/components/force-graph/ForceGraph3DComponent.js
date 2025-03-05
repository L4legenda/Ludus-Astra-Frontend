'use client';

import { useRef, useEffect } from 'react';
import ForceGraph3D from '3d-force-graph';

export const ForceGraph3DVanilla = () => {
    const containerRef = useRef(null);
    const graphRef = useRef(null);

    // Генерация случайных данных для графа
    const generateGraphData = () => {
        const nodes = [...Array(10).keys()].map((i) => ({
            id: i,
            name: `Node ${i}`,
            val: Math.random() * 10 + 5, // Размер узла
        }));

        const links = [];
        for (let i = 0; i < 15; i++) {
            const source = Math.floor(Math.random() * nodes.length);
            const target = Math.floor(Math.random() * nodes.length);
            if (source !== target) {
                links.push({ source, target });
            }
        }

        return { nodes, links };
    };

    useEffect(() => {
        if (!containerRef.current) return;

        // Инициализация графа
        const graphData = generateGraphData();
        const graph = ForceGraph3D()(containerRef.current)
            .graphData(graphData)
            .nodeLabel("name") // Показывать имя узла при наведении
            .nodeVal("val") // Размер узла
            .nodeAutoColorBy("id") // Окраска узлов по id
            .linkWidth(1) // Толщина связей
            .onNodeClick((node) => {
                alert(`Clicked node: ${node.name}`);
            });

        // Настройка камеры
        graph.cameraPosition({ z: 200 });

        // Сохранение экземпляра графа в ref
        graphRef.current = graph;

        // Функция для обновления размеров графа
        const updateGraphSize = () => {
            if (graphRef.current && containerRef.current) {
                const { offsetWidth, offsetHeight } = containerRef.current;
                graphRef.current.width(offsetWidth);
                graphRef.current.height(offsetHeight);
                graphRef.current.refresh(); // Обновляем граф после изменения размеров
            }
        };

        // Инициализация размеров
        updateGraphSize();

        // Обработчик изменения размеров окна
        window.addEventListener('resize', updateGraphSize);

        // Использование ResizeObserver для отслеживания изменений размеров родителя
        const resizeObserver = new ResizeObserver(() => {
            updateGraphSize();
        });
        resizeObserver.observe(containerRef.current);

        // Очистка при размонтировании
        return () => {
            window.removeEventListener('resize', updateGraphSize);
            resizeObserver.disconnect();
            if (graphRef.current) {
                graphRef.current._destructor && graphRef.current._destructor();
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
        />
    );
};
