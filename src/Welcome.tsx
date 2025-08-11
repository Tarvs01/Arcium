export default function WelcomeText() {
    const svgStyles = `
      :root{
        --duration: 17s;
        --stroke: 4px;
      }
  
      .drawn {
        fill: none;
        stroke: #5e32d5;
        stroke-width: var(--stroke);
        stroke-linecap: round;
        stroke-linejoin: round;
        paint-order: stroke fill;
        stroke-dasharray: 1200;
        stroke-dashoffset: 1200;
        animation: draw var(--duration) linear forwards,
                   fillFade 2.5s ease var(--duration) forwards;
      }
  
      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }
  
      @keyframes fillFade {
        0%   { fill: none; fill-opacity: 0; }
        100% { fill: #5e32d5; fill-opacity: 1; }
      }
  
      .group {
        transform-origin: center;
        animation: settle 2.6s ease calc(var(--duration) + 0.05s) both;
      }
      @keyframes settle {
        0%   { transform: scale(1.02); }
        100% { transform: scale(1); }
      }
    `;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100"
        width="500"
        height="100"
        role="img"
        aria-label="welcome to"
      >
        <style>{svgStyles}</style>
        <g className="group">
          <text
            className="drawn"
            x="10"
            y="80"
            fontFamily="Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif"
            fontWeight="700"
            fontSize="84"
          >
            Welcome to
          </text>
        </g>
      </svg>
    );
  }
  