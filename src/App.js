import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { data } from "./MyData.js";
import {} from "./style.css";
 
export default function App() {
  const [selected, setSelected] = useState(0);
 
  return (
    <AnimateSharedLayout>
      <div>
      <marquee>Tap/Click the words.</marquee>
    </div>
      <ol style={{ transform: "translateZ(0)" }}>
        {data.map(({ title, color }, i) => (
          <motion.li
            animate
            key={i}
            className={`title ${i === selected && "selected"}`}
            style={{ color: i === selected ? color : "Black" }}
            onClick={() => setSelected(i)}
          >
            {i === selected && (
              <motion.div
                style={{ backgroundColor: color }}
              />
            )}
            {title}
          </motion.li>
        ))}
      </ol>
    </AnimateSharedLayout>
  );
}