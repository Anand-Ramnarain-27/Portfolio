import { useCallback, useMemo } from "react";

/**
 * Drives a ring of particles orbiting the origin on a flattened ellipse, each
 * with its own radius, speed and height plus a slight vertical bob.
 *
 * Returns the position buffer to hand to drei's <Points>, and an `update`
 * function to call from useFrame. Positions are written in place, so nothing
 * is allocated per frame.
 *
 * @param {number} count
 * @param {Object} options
 * @param {[number, number]} options.radius  [min, max] orbit radius.
 * @param {[number, number]} options.speed   [min, max] angular speed (rad/s).
 * @param {number} options.height            Total vertical spread, centred on 0.
 * @param {number} options.bobAmount         Vertical bob amplitude.
 * @param {number} options.bobSpeed          Vertical bob frequency.
 * @param {number} [options.depthScale=0.6]  Squashes Z to tilt the orbit plane.
 */
export const useOrbitingParticles = (
  count,
  { radius, speed, height, bobAmount, bobSpeed, depthScale = 0.6 },
) => {
  const [minRadius, maxRadius] = radius;
  const [minSpeed, maxSpeed] = speed;

  // Per-particle parameters are randomised once and never change.
  const seeds = useMemo(() => {
    const radii = new Float32Array(count);
    const angles = new Float32Array(count);
    const speeds = new Float32Array(count);
    const heights = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      radii[i] = minRadius + Math.random() * (maxRadius - minRadius);
      angles[i] = Math.random() * Math.PI * 2;
      speeds[i] = minSpeed + Math.random() * (maxSpeed - minSpeed);
      heights[i] = (Math.random() - 0.5) * height;
    }
    return { radii, angles, speeds, heights };
  }, [count, minRadius, maxRadius, minSpeed, maxSpeed, height]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  /** @param {import("three").Points} points  @param {number} time  Elapsed seconds. */
  const update = useCallback(
    (points, time) => {
      const attribute = points.geometry.attributes.position;
      const array = attribute.array;

      for (let i = 0; i < count; i++) {
        const angle = seeds.angles[i] + time * seeds.speeds[i];
        const r = seeds.radii[i];
        array[i * 3] = Math.cos(angle) * r;
        array[i * 3 + 1] = seeds.heights[i] + Math.sin(time * bobSpeed + i) * bobAmount;
        array[i * 3 + 2] = Math.sin(angle) * r * depthScale;
      }
      attribute.needsUpdate = true;
    },
    [count, seeds, bobAmount, bobSpeed, depthScale],
  );

  return { positions, update };
};
