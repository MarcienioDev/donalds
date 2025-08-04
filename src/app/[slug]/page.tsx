import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{slug: string}>
}

const RestaurantPage = async  ({ params }: RestaurantPageProps) => {
    
    const { slug } = await params;
    const restaurant = await db.restaurant.findFirst({ where: { slug } });
    if (!restaurant){
      return notFound
    }

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
      {/* Logo e Titulo */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
      <h2 className="text-xl font-semibold">{restaurant.name}</h2>
      </div>
      {/* Seja bem-vindo */}
      <div className="pt-24 text-center space-y-2">
          <h3 className="text-2xl font-semibold">Seja bem-vindo</h3>  
          <p className="opacity-55">
            Escolha como prefere aproveitar sua refeição. 
            Estamos oferecer praticidade e sabor em cada detalhe
          </p>
      </div>
      <div className="pt-14 grid grid-cols-2 gap-4">
      {/* Dine-in Button */}
      <ConsumptionMethodOption
        option="DINE_IN"
        imageUrl="/dine_in.png"
        imageAlt="Para comer aqui"
        buttonText="Para comer aqui"
        slug={slug}
      />
      {/* Takeaway Button */}
      <ConsumptionMethodOption
        imageUrl="/takeaway.png"
        imageAlt="Para viagem"
        buttonText="Para viagem"
        option="TAKEAWAY"
        slug={slug}
      />
      </div>
    </div>
  );
}   

export default RestaurantPage;