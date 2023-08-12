import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { categories } from "@/app/utils/categories";

export default function CreateEvent() {
	return (
		<div className="container m-auto">
			<div className="grid md:grid-cols-2 grid-cols-1 gap-1 p-8">
				<div className="mb-4 pr-6 border-r-2 border-[#61d9de]">
					{/*Título Página Adinionar*/}
					<div className="mb-4">
						<p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
						<p className="text-blue text-base font-light">
							Crie o seu próprio evento da maneira que você preferir! :)
						</p>
					</div>

					{/*inicio Inputs*/}
					<Input
						title="Título"
						placeholder="Insira o nome do seu evento"
						type="text"
					/>
					<Input
						title="Endereço"
						placeholder="Insira o endereço do seu evento"
						type="text"
					/>
					<div className="grid grid-cols-2 gap-3">
						<Input title="Data" placeholder="dd/mm/aaaa" type="date" />
						<Input title="Horário" placeholder="hh:mm" type="number" />
					</div>

					{/* checkbox */}
					<p className="text-blue font-medium mb-4">Categoria do Evento</p>
					<div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
						{categories.map((category) => (
							<div className="flex items-center text-blue font-light">
								<input
									className="mr-1 w-4 h-4 bg-white rounded border border-gray-300"
									type="checkbox"
								/>
								<label htmlFor="">{category.name}</label>
							</div>
						))}
					</div>

					{/* valores */}
					<div className="mt-4">
						<p className="text-base font-medium text-blue">Valor</p>
						<p className="text-neutral-500 text-sm font-light">
							Caso seu evento seja gratuito, o campo deverá ficar vazio. Caso
							haja mais de um setor, basta adicionar paraa seção. Se houver
							cupom promocional, basta colocar o código no campo “cupom”.
						</p>
					</div>
					<div className="grid grid-cols-5 gap-2 mt-4">
						<Input
							className="col-span-2"
							title="Preço"
							placeholder="R$0,00"
							type="number"
						/>
						<Input
							className="col-span-3"
							title="Setor"
							placeholder="Insira o nome do setor"
							type="text"
						/>
					</div>
					<Input
						title="Descrição"
						placeholder="Insira o nome do setor"
						type="textarea"
					/>
					{/* fim Inputs */}
				</div>
				{/*direita*/}
				<div className="mb-4 ml-4">
					<p className="text-blue text-2xl font-medium">Adicionar Eventos</p>
					<p className="text-blue text-base font-light">
						Crie o seu próprio evento da maneira que você preferir! :)
					</p>

					{/* input files */}
					{/* banner */}
					<div className="my-4">
						<p className="text-blue text-base font-medium">Banner</p>
						<p className="text-neutral-500 text-sm font-light">
							Insira um banner no formato 336x280
						</p>
						<div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
							<InputFile />
						</div>
					</div>

					{/* flyers */}
					<div className="my-4">
						<p className="text-blue text-base font-medium">Flyers</p>
						<p className="text-neutral-500 text-sm font-light">
							Insira até três flyers
						</p>
						<div className="grid grid-cols-3 gap-2">
							<div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
								<InputFile />
							</div>
							<div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
								<InputFile />
							</div>
							<div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
								<InputFile />
							</div>
						</div>
					</div>

					{/* map */}
					<div className="my-4">
						<p className="text-blue text-base font-medium">Mapa do Evento</p>
						<p className="text-neutral-500 text-sm font-light">
							Insira o Mapa do Evento indicando os setores
						</p>
						<div className="w-full h-56 bg-zinc-300 rounded-3xl shadow">
							<InputFile />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
