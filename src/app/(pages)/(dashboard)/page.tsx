import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecundary } from "@/app/components/BannerSecundary";
import { categories } from "@/app/utils/categories";

export default function Dashboard() {
	return (
		//container
		<div className="container mx-auto">
			{/*Painel*/}
			<BannerPrimary />

			{/*Destaques*/}
			<div className="p-2 text-blue">
				<p className="text-2xl font-medium">Eventos em Destaque</p>
				<p className="text-base font-light">
					Se divirta com os principais eventos de Minas Gerais e do Brasil!
				</p>
			</div>

			<div className="grid grid-cols-3 gap-4 mb-4">
				{/*Grid Destaques*/}
				<BannerSecundary />
				<BannerSecundary />
				<BannerSecundary />
			</div>

			{/*Navegar por tipo*/}
			<div className="p-2 text-blue">
				<p className="text-2xl font-medium">Navegue por tipo de evento</p>
				<p className="text-base font-light">Vá ao evento que é a sua cara :D</p>
			</div>

			<div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
				{categories.map((category) => {
					return (
						<div className="flex flex-col items-center justify-center cursor-pointer">
							<img src={category.icon} alt="" className="rounded-full" />
							<p>{category.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
