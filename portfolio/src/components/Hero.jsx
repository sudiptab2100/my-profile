import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { Socials } from "./ui";
import { TextGenerateEffect } from "./aceternity/text-generate-effect";
import { MovingBorderButton } from "./aceternity/moving-border";
import { BackgroundGradient } from "./aceternity/background-gradient";

function Avatar() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex items-center justify-center"
    >
      <BackgroundGradient
        roundedClassName="rounded-full"
        containerClassName="rounded-full"
      >
        <div className="h-[240px] w-[240px] overflow-hidden rounded-full bg-[#0e0e12] xl:h-[380px] xl:w-[380px]">
          <img
            src={profile.avatar}
            alt={profile.name}
            width="380"
            height="380"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </BackgroundGradient>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-full animate-orbit motion-reduce:animate-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 55%, #00ff99 82%, #12d8ff 93%, transparent 100%)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
        }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-radial opacity-80" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative mx-auto flex min-h-screen flex-col-reverse items-center justify-center gap-10 pb-20 pt-32 xl:flex-row xl:justify-between xl:gap-6 xl:pb-0 xl:pt-0">
        <motion.div
          className="text-center xl:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <span className="kicker">{profile.role}</span>
          <h1 className="h1 mt-6">
            Hello, I&apos;m <br />
            <span className="text-accent text-glow">{profile.name}</span>
          </h1>
          <TextGenerateEffect
            words={profile.pitch}
            className="mx-auto mt-6 max-w-[540px] text-white/70 xl:mx-0"
          />

          <div className="mt-10 flex flex-col items-center gap-8 xl:flex-row">
            <MovingBorderButton
              as="a"
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
            >
              View CV <FiDownload className="text-base" />
            </MovingBorderButton>
            <Socials className="justify-center" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <Avatar />
        </motion.div>
      </div>
    </section>
  );
}
