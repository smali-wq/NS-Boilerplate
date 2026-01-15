import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../utils/cn"
import { Button } from "../atoms/Button"

export interface CarouselProps {
    items: React.ReactNode[]
    autoPlay?: boolean
    interval?: number
    slidesToShow?: number
    gap?: number
    className?: string
}

export function Carousel({ items, autoPlay = true, interval = 5000, slidesToShow = 1, gap = 16, className }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [isHovered, setIsHovered] = React.useState(false)

    const maxIndex = Math.max(0, items.length - slidesToShow)

    const nextSlide = React.useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, [maxIndex])

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
    }

    React.useEffect(() => {
        if (autoPlay && !isHovered && items.length > slidesToShow) {
            const timer = setInterval(nextSlide, interval)
            return () => clearInterval(timer)
        }
    }, [autoPlay, interval, nextSlide, isHovered, items.length, slidesToShow])

    const slideWidth = 100 / slidesToShow

    return (
        <div
            className={cn("relative group overflow-hidden rounded-[32px] border border-slate-200 dark:border-slate-800", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
            >
                {/* Adjusting for gap in flex container with percentage widths is better done via negative margin or box-sizing */}
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                            style={{
                                width: `calc(${slideWidth}% - ${(gap * (slidesToShow - 1)) / slidesToShow}px)`,
                                marginRight: index === items.length - 1 ? 0 : `${gap}px`
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons - Only show if there are more items than slidesToShow */}
            {items.length > slidesToShow && (
                <>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-slate-900 z-10"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-slate-900 z-10"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </>
            )}

            {/* Pagination Dots - Optional or adjusted for multi-slide */}
            {items.length > slidesToShow && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                "h-1.5 rounded-full transition-all",
                                currentIndex === index ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
