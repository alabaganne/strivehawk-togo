import { testimonials } from "@/utils/constant";
import { Marquee } from "./marquee";
import { Repeat2, ThumbsUp } from "lucide-react";

export function TestimonialMarquee() {
  return (
    <Marquee className="overflow-hidden mask-gradient-custom flex items-center mb-8 mask-image-custom group">
      <div className="flex animate-infinite-scroll [--animation-delay:120s] group-hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((data, index) => (
          <div
            key={`${data.id}-${index}`}
            className="border border-transparent-border flex flex-col mx-4 min-w-[24rem] max-w-[26rem] rounded-3xl bg-black/40 p-6 shadow-lg shadow-emerald-500/10"
          >
            <div className="flex items-center gap-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-green via-brand to-primary-button text-black font-semibold">
                {data.initials}
              </div>
              <div>
                <p className="text-md font-semibold text-offWhite">{data.displayName}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary-text">
                  {data.role}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-secondary-text">
              {data.content}
            </p>

            <div className="mt-6 flex items-center gap-6 text-secondary-text text-xs">
              <span className="flex items-center gap-2">
                <ThumbsUp size={16} /> {data.likes}
              </span>
              <span className="flex items-center gap-2">
                <Repeat2 size={16} /> {data.shares}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
}
