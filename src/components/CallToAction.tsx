'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import helixImage from '../assets/images/helix2.png';
import emojiStar from '../assets/images/emojistar.png';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      className="bg-black text-white text-center py-[72px] sm:py-24"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStar}
            alt="emoji star"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Get instant access
        </h2>
        <div className="text-white/70 text-xl sm:max-w-[648px] mx-auto mt-5">
          <p>
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 px-5 rounded-lg">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
