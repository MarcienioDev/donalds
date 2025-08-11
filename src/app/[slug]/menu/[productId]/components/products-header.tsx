"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductHeaderProps {
    product: Pick<Product, 'name' | 'imageUrl'>;
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
    const router = useRouter();
    const handleBackClick = () => router.back();
    return (
         <div className="relative w-full h-80">
                {/* Back button */}
                <Button onClick={handleBackClick} className="rounded-full bg-white text-black shadow-sm absolute left-4 top-4 z-50" size="icon">
                    <ChevronLeftIcon />
                </Button>
                {/* Scroll button */}
                <Button className="rounded-full bg-white text-black shadow-sm absolute right-4 top-4 z-50" size="icon">
                    <ScrollTextIcon />
                </Button>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain"
                />
            </div>
    )
}

export default ProductHeader;