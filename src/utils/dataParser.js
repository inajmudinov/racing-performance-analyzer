export function parseTelemetry(fileContent) {
  const lines = fileContent.split('\n');
  const data = lines.map(line => {
    const [time, speed] = line.split(',');
    return {
      time: parseFloat(time) || 0,
      speed: parseFloat(speed) || 0
    };
  });
  return data.filter(d => !isNaN(d.speed));
}
