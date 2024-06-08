import * as React from "react";

import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Adjusted to include the correct path for a local image
const images = [
    '/logo-cstad.png', // Example of a local image path
    '/logo-image.png', // Another example
    '/yet-another-image.png', // And another one
    '/final-image.png', // Last example
    '/logo-cstad.png', // Repeated for demonstration
];

export function CardCarousel() {
    return (
        <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-1">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex rounded-full items-center justify-center p-6">
                                    {/* Correctly referencing the local image */}
                                    <img src={image} alt={`Image ${index + 1}`} className="rounded-full" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CardCarousel;
