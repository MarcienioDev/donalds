"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import { Restaurant } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>;
}

const RestaurantHeader = ({restaurant}: RestaurantHeaderProps) => {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    };
    return (
        <div className="relative h-64 w-full">
            <Button onClick={handleBack} className="rounded-full bg-white text-black shadow-sm absolute left-4 top-4 z-50" size="icon">
               <ChevronLeftIcon />
            </Button>
            <Image
                src={restaurant.coverImageUrl}
                alt={restaurant.name}
                fill
                className="object-cover"    
            />
             <Button className="rounded-full bg-white text-black shadow-sm absolute right-4 top-4 z-50" size="icon">
               <ScrollTextIcon />
            </Button>
        </div>
    );
}

export default RestaurantHeader;