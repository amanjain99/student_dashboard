import { motion } from 'framer-motion';
import styles from './AccuracyGraph.module.css';

interface AttemptData {
  label: string;
  accuracy: number;
  isCurrent?: boolean;
  isFuture?: boolean;
}

interface AccuracyGraphProps {
  attempts: AttemptData[];
  improvementMessage?: string;
}

export function AccuracyGraph({ attempts, improvementMessage }: AccuracyGraphProps) {
  // Calculate SVG dimensions and spacing
  const graphWidth = 360;
  const graphHeight = 145;
  const paddingLeft = 35;
  const paddingRight = 10;
  const paddingTop = 28;
  const paddingBottom = 45;
  const chartLeftMargin = 24; // Extra margin from left for first data point
  
  const chartWidth = graphWidth - paddingLeft - paddingRight;
  const chartHeight = graphHeight - paddingTop - paddingBottom;
  const effectiveChartWidth = chartWidth - chartLeftMargin;
  
  // Y-axis labels (0% to 100%)
  const yLabels = [100, 80, 60, 40, 20, 0];
  
  // Calculate points for the line
  const points = attempts.map((attempt, index) => {
    const x = paddingLeft + chartLeftMargin + (index / (attempts.length - 1)) * effectiveChartWidth;
    const y = paddingTop + ((100 - attempt.accuracy) / 100) * chartHeight;
    return { x, y, ...attempt };
  });
  
  // Create the line path
  const linePath = points
    .filter(p => !p.isFuture)
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');
  
  // Create the area path (for gradient fill under the line)
  const nonFuturePoints = points.filter(p => !p.isFuture);
  const firstPointX = nonFuturePoints[0]?.x || (paddingLeft + chartLeftMargin);
  const lastPointX = nonFuturePoints.slice(-1)[0]?.x || (paddingLeft + chartLeftMargin);
  const areaPath = nonFuturePoints
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ') + 
    ` L ${lastPointX} ${paddingTop + chartHeight} L ${firstPointX} ${paddingTop + chartHeight} Z`;

  // Dashed line for future projection
  const futurePoints = points.filter(p => p.isFuture || p.isCurrent);
  const dashedPath = futurePoints.length > 1 
    ? futurePoints.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')
    : '';

  return (
    <motion.div 
      className={styles.accuracyGraphContainer}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className={styles.graphHeader}>
        <span className={styles.graphLabel}>Accuracy</span>
        <button className={styles.infoButton} title="Accuracy over multiple attempts">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </button>
      </div>
      
      <div className={styles.graphWrapper}>
        <svg 
          viewBox={`0 0 ${graphWidth} ${graphHeight}`}
          className={styles.graph}
          preserveAspectRatio="xMinYMid meet"
        >
          <defs>
            {/* Gradient for the area under the line */}
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00c985" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00c985" stopOpacity="0.05" />
            </linearGradient>
            
            {/* Glow filter for the line */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Y-axis labels */}
          {yLabels.map((label, index) => {
            const y = paddingTop + (index / (yLabels.length - 1)) * chartHeight;
            return (
              <g key={label}>
                <text 
                  x={14} 
                  y={y + 4} 
                  className={styles.yLabel}
                  textAnchor="start"
                >
                  {label}%
                </text>
              </g>
            );
          })}
          
          {/* Area under the line */}
          <motion.path
            d={areaPath}
            fill="url(#areaGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          
          {/* Main line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="#00c985"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Dashed line for future/projection */}
          {dashedPath && (
            <motion.path
              d={dashedPath}
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
          )}
          
          {/* Data points and labels */}
          {points.map((point, index) => (
            <g key={index}>
              {/* X-axis label */}
              <text 
                x={point.x} 
                y={graphHeight - 25}
                className={`${styles.xLabel} ${point.isCurrent ? styles.currentLabel : ''}`}
                textAnchor="middle"
              >
                {point.label.split('\n').map((line, i) => (
                  <tspan key={i} x={point.x} dy={i === 0 ? 0 : 11}>{line}</tspan>
                ))}
              </text>
              
              {/* Data point */}
              {!point.isFuture && (
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, type: "spring", stiffness: 300 }}
                >
                  {/* Outer glow */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="6"
                    fill="rgba(0, 201, 133, 0.2)"
                  />
                  {/* Inner dot */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#00c985"
                    stroke="#0D0A12"
                    strokeWidth="1.5"
                  />
                  
                  {/* Value label */}
                  <g>
                    <rect
                      x={point.x - 18}
                      y={point.y - 24}
                      width="36"
                      height="16"
                      rx="4"
                      fill="rgba(0, 0, 0, 0.75)"
                      stroke="rgba(0, 201, 133, 0.4)"
                      strokeWidth="1"
                    />
                    <text
                      x={point.x}
                      y={point.y - 12}
                      className={styles.valueLabel}
                      textAnchor="middle"
                    >
                      {point.accuracy}%
                    </text>
                  </g>
                </motion.g>
              )}
            </g>
          ))}
        </svg>
      </div>
      
      {improvementMessage && (
        <motion.div 
          className={styles.improvementMessage}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className={styles.celebrationIcon}>🎉</span>
          <span className={styles.messageText}>{improvementMessage}</span>
        </motion.div>
      )}
    </motion.div>
  );
}

