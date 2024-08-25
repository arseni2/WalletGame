import React, { useEffect, useRef } from 'react';

export type WheelSector = {
	color: string;
	label: string;
};

type propsType = {
	sectors: WheelSector[];
};

const rand = (m: number, M: number) => Math.random() * (M - m) + m;
const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard

const WheelFortune = ({ sectors }: propsType) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	let angVel = 0;
	let ang = 0;
	const dia = 350;
	const rad = dia / 2;
	const PI = Math.PI;
	const TAU = 2 * PI;
	const arc = TAU / sectors.length;

	function getIndex() {
		return Math.floor(sectors.length - (ang / (2 * PI)) * sectors.length) % sectors.length;
	}

	function rotate() {
		if (!canvasRef.current) return;
		const sector = sectors[getIndex()];
		canvasRef.current.style.transform = `rotate(${ang - PI / 2}rad)`;
		const spinEl = document.getElementById('spin')!;
		spinEl.textContent = angVel === 0 ? 'SPIN' : sector.label;
		spinEl.style.background = sector.color;
	}

	function frame() {
		if (!angVel) return;
		angVel *= friction; // Decrement velocity by friction
		if (Math.abs(angVel) < 0.002) angVel = 0; // Bring to stop
		ang += angVel; // Update angle
		ang %= TAU; // Normalize angle
		rotate();
	}

	function engine() {
		frame();
		requestAnimationFrame(engine);
	}

	useEffect(() => {
		if (canvasRef.current) {
			const ctx = canvasRef.current.getContext('2d');
			if (ctx) {
				function drawSector(sector: WheelSector, i: number) {
					const ang = arc * i;
					ctx?.save();
					// COLOR
					ctx?.beginPath();
					if (ctx?.fillStyle) {
						ctx.fillStyle = sector.color;
					}
					ctx?.moveTo(rad, rad);
					ctx?.arc(rad, rad, rad, ang, ang + arc);
					ctx?.lineTo(rad, rad);
					ctx?.fill();
					// TEXT
					ctx?.translate(rad, rad);
					ctx?.rotate(ang + arc / 2);
					if (ctx?.textAlign) {
						ctx.textAlign = 'right';
					}
					if (ctx?.fillStyle) {
						ctx.fillStyle = '#fff';
					}
					if (ctx?.font) {
						ctx.font = 'bold 30px sans-serif';
					}
					ctx?.fillText(sector.label, rad - 10, 10);
					ctx?.restore();
				}

				sectors.forEach((sector, i) => drawSector(sector, i));
				rotate(); // Initial rotation
				engine(); // Start engine
			}
		}
	}, [canvasRef.current, sectors]);

	const handleSpin = () => {
		if (angVel === 0) {
			angVel = rand(0.3, 0.5); // Set the initial angular velocity
		}
	};

	return (
		<div id="wheelOfFortune">
			<canvas ref={canvasRef} width={350} height={350} />
			<button onClick={handleSpin} id="spin">SPIN</button>
		</div>
	);
};

export default WheelFortune;
