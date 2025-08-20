'use client';

import React from 'react';
import { useEffect, useRef } from 'react';

const GradientBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const drawGradient = (ctx: CanvasRenderingContext2D) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(0, '#000000'); // Black
        gradient.addColorStop(1, '#FF69B4'); // Pink

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                drawGradient(ctx);
            }
        }
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default GradientBackground;