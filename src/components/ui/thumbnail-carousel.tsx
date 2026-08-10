import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ThumbnailSlide = {
  url: string;
  caption?: string;
};

type ThumbnailCarouselProps = {
  slides?: ThumbnailSlide[];
  className?: string;
};

const defaultSlides: ThumbnailSlide[] = [
  { url: "/placeholder.svg", caption: "Slide one" },
  { url: "/placeholder.svg", caption: "Slide two" },
  { url: "/placeholder.svg", caption: "Slide three" },
];

const ThumbnailCarousel = ({ slides, className }: ThumbnailCarouselProps) => {
  const items = slides && slides.length > 0 ? slides : defaultSlides;
  const [selected, setSelected] = React.useState(0);

  const [mainRef, mainApi] = useEmblaCarousel({ loop: true });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onSelect = React.useCallback(() => {
    if (!mainApi) return;
    const index = mainApi.selectedScrollSnap();
    setSelected(index);
    thumbApi?.scrollTo(index);
  }, [mainApi, thumbApi]);

  React.useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
    return () => {
      mainApi.off("select", onSelect);
      mainApi.off("reInit", onSelect);
    };
  }, [mainApi, onSelect]);

  const scrollTo = (index: number) => mainApi?.scrollTo(index);

  return (
    <div className={cn("w-full", className)}>
      {/* Main viewport */}
      <div className="relative group rounded-2xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-md">
        <div className="overflow-hidden" ref={mainRef}>
          <div className="flex">
            {items.map((slide, i) => (
              <div className="min-w-0 flex-[0_0_100%]" key={`${slide.url}-${i}`}>
                <img
                  src={slide.url}
                  alt={slide.caption ?? `Screenshot ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full aspect-[16/9] object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => mainApi?.scrollPrev()}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 bg-background/70 backdrop-blur-md border border-border/60 text-foreground opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => mainApi?.scrollNext()}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 bg-background/70 backdrop-blur-md border border-border/60 text-foreground opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {items[selected]?.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/95 to-transparent p-4 pt-10">
            <p className="text-sm text-foreground/90">
              <span className="text-primary font-medium mr-2">
                {selected + 1}/{items.length}
              </span>
              {items[selected].caption}
            </p>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-4 overflow-hidden" ref={thumbRef}>
        <div className="flex gap-3">
          {items.map((slide, i) => (
            <button
              type="button"
              key={`thumb-${slide.url}-${i}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === selected}
              className={cn(
                "min-w-0 flex-[0_0_28%] sm:flex-[0_0_18%] lg:flex-[0_0_12%] rounded-lg overflow-hidden border transition-all duration-300",
                i === selected
                  ? "border-primary ring-2 ring-primary/40 opacity-100"
                  : "border-border/50 opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={slide.url}
                alt=""
                loading="lazy"
                className="w-full aspect-[16/10] object-cover object-top"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
