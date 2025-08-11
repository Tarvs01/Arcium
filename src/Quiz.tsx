export default function QuizText() {
    const svgStyles = `
      :root {
        --delay: 0s;       /* wait before starting */
        --duration: 1.6s;  /* speed of each letter pop */
        --stagger: 0.15s;  /* gap between letters */
        --stroke: 4px;     /* outline width */
      }
  
      .letter {
        opacity: 0;
        stroke: #5e32d5;
        stroke-width: var(--stroke);
        stroke-linecap: round;
        stroke-linejoin: round;
        paint-order: stroke fill;
        fill: #5e32d5;
        transform: translateY(40px);
        animation: popUp var(--duration) ease-out forwards;
      }
  
      .l1 { animation-delay: calc(var(--delay) + 0 * var(--stagger)); }
      .l2 { animation-delay: calc(var(--delay) + 1 * var(--stagger)); }
      .l3 { animation-delay: calc(var(--delay) + 2 * var(--stagger)); }
      .l4 { animation-delay: calc(var(--delay) + 3 * var(--stagger)); }
  
      @keyframes popUp {
        0% {
          opacity: 0;
          transform: translateY(40px) scale(0.9);
        }
        60% {
          opacity: 1;
          transform: translateY(-6px) scale(1.05);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 200"
        width="300"
        height="200"
        role="img"
        aria-label="quiz"
      >
        <style>{svgStyles}</style>
        <g fontFamily="Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif"
           fontWeight="700"
           fontSize="74">
          <text x="40" y="120" className="letter l1">Q</text>
          <text x="100" y="120" className="letter l2">u</text>
          <text x="150" y="120" className="letter l3">i</text>
          <text x="180" y="120" className="letter l4">z</text>
        </g>
      </svg>
    );
  }
  