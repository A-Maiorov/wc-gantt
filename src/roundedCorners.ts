export function createRoundedPathString(p: number[][]) {
  const pathCoords: { x: number; y: number }[] = p.map((i) => ({
    x: i[0],
    y: i[1],
  }));
  const path = ["M" + pathCoords[0].x + "," + pathCoords[0].y];
  const curveRadius = 5;

  // Reset indexes, so there are no gaps
  // pathCoords = pathCoords.slice();

  const lastInd = pathCoords.length - 1;

  // compensate rounded corner for the last small line.
  if (pathCoords[lastInd - 1].x < pathCoords[lastInd].x)
    pathCoords[lastInd].x += curveRadius / 2;
  else pathCoords[lastInd].x -= curveRadius / 2;

  for (let i = 0; i < pathCoords.length; i++) {
    // 1. Get current coord and the next two (startpoint, cornerpoint, endpoint) to calculate rounded curve
    const c2Index =
      i + 1 > pathCoords.length - 1 ? (i + 1) % pathCoords.length : i + 1;
    const c3Index =
      i + 2 > pathCoords.length - 1 ? (i + 2) % pathCoords.length : i + 2;

    const c1 = pathCoords[i];
    const c2 = pathCoords[c2Index];
    const c3 = pathCoords[c3Index];

    // 2. For each 3 coords, enter two new path commands: Line to start of curve, bezier curve around corner.

    // Calculate curvePoint c1 -> c2
    const c1c2Distance = Math.sqrt(
      Math.pow(c1.x - c2.x, 2) + Math.pow(c1.y - c2.y, 2)
    );
    const c1c2DistanceRatio = (c1c2Distance - curveRadius) / c1c2Distance;
    const c1c2CurvePoint = [
      ((1 - c1c2DistanceRatio) * c1.x + c1c2DistanceRatio * c2.x).toFixed(1),
      ((1 - c1c2DistanceRatio) * c1.y + c1c2DistanceRatio * c2.y).toFixed(1),
    ];

    // Calculate curvePoint c2 -> c3
    const c2c3Distance = Math.sqrt(
      Math.pow(c2.x - c3.x, 2) + Math.pow(c2.y - c3.y, 2)
    );
    const c2c3DistanceRatio = curveRadius / c2c3Distance;

    if (i !== lastInd) {
      // Line to start of curve (L endcoord)
      path.push("L" + c1c2CurvePoint.join(","));

      if (i === lastInd - 1) {
        path.push("L" + c2.x + "," + c2.y);
      } else {
        const c2c3CurvePoint = [
          ((1 - c2c3DistanceRatio) * c2.x + c2c3DistanceRatio * c3.x).toFixed(
            1
          ),
          ((1 - c2c3DistanceRatio) * c2.y + c2c3DistanceRatio * c3.y).toFixed(
            1
          ),
        ];
        // Bezier line around curve (Q controlcoord endcoord)
        path.push("Q" + c2.x + "," + c2.y + "," + c2c3CurvePoint.join(","));
      }
    }
  }

  return path.join(" ");
}
