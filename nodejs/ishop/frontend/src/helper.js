function generateRandomGradient() {
    // Generate random values for RGB components
    const r1 = Math.floor(Math.random() * 200);
    const g1 = Math.floor(Math.random() * 200);
    const b1 = Math.floor(Math.random() * 200);

    const r2 = Math.floor(Math.random() * 100);
    const g2 = Math.floor(Math.random() * 100);
    const b2 = Math.floor(Math.random() * 100);

    // Generate CSS gradient string
    const gradient = `linear-gradient(to bottom left, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;

    return gradient;
}

export { generateRandomGradient };
