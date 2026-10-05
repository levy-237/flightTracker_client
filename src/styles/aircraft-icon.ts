export function createAircraftIcon(): ImageData {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Cannot create aircraft icon");

  const aircraft = new Path2D(
    "M32 4 C29 4 28 9 28 13 L28 25 L7 38 L7 43 L28 36 " +
      "L28 49 L20 55 L20 59 L32 55 L44 59 L44 55 L36 49 " +
      "L36 36 L57 43 L57 38 L36 25 L36 13 C36 9 35 4 32 4 Z",
  );
  context.fillStyle = "#fbbf24";
  context.strokeStyle = "#172554";
  context.lineWidth = 2;
  context.lineJoin = "round";
  context.fill(aircraft);
  context.stroke(aircraft);
  return context.getImageData(0, 0, 64, 64);
}
