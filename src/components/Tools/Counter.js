import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const fontSize = 37;
const padding = 15;
const height = fontSize + padding;

export default function Counter({ value }) {
  return (
    <div
      style={{ fontSize }}
      className="text-white fw-bold d-flex ml-3 overflow-hidden rounded px-2 lh-1"
    >
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
}

function Digit({ place, value }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height, fontVariantNumeric: "tabular-nums" }} className="position-relative w-25" >
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y, inset: 0 }}
      className="position-absolute d-flex align-items-center justify-content-center"
    >
      {number}
    </motion.span>
  );
}
