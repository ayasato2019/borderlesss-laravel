'use client'

import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ParallaxProps {
	children: ReactNode;
	targetFactor?: number;
	verticalPosition: 'top' | 'bottom';
	verticalOffset: number;
	horizontalPosition: 'left' | 'right';
	horizontalOffset: number;
	objectSize: number | string;
}

export const ParallaxItem: React.FC<ParallaxProps> = ({
	children,
	targetFactor = 0.15,
	verticalPosition,
	verticalOffset,
	horizontalPosition,
	horizontalOffset,
	objectSize,
}) => {
	const domRef = useRef<HTMLDivElement>(null);
	const [offsetY, setOffsetY] = useState(0);

	const onScroll = () => {
		const scrollY = window.pageYOffset;
		setOffsetY(scrollY * targetFactor * -1);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [targetFactor]);

	// パララックスの動きをY軸のみで制限
	const style: React.CSSProperties = {
		position: 'absolute',
		[verticalPosition]: verticalOffset,
		[horizontalPosition]: horizontalOffset,
		width: objectSize,
		height: objectSize,
		transform: `translateY(${offsetY}px)`,
	};

	return (
		<div ref={domRef} style={style}>
			{children}
		</div>
	);
};
