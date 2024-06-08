"use client";

import { twMerge } from "tailwind-merge";

const PageContent = () => {

    //   if (songs.length === 0) {
    //     return (
    //       <div className="mt-4 text-neutral-400">
    //         No songs available.
    //       </div>
    //     )
    //   }

    return (
        <div
            className={twMerge(`flex h-full`, 'h-[calc(100%-120px)]')}
        >
            <main className="h-full no-scrollbar w-full text-white overflow-y-auto">
                <div className="flex flex-col justify-center items-center">
                    <h2>Timbiqui-Buenaventura</h2>
                </div>
                <p>Enbarcaciones programadas para el dia de mañana</p>
                <section className="mb-2">
                    <table className="table-auto w-full">
                        <thead className="bg-neutral-500   ">
                            <tr className="border">
                                <th>Embarcacion</th>
                                <th>Lugar</th>
                                <th>Salida</th>
                                <th>Llegada</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="border">Mellizo</td>
                                <td className="border">Timbiqui</td>
                                <td className="border">06/30:am</td>
                                <td className="border">10/00:am</td>
                            </tr>
                            <tr className="border">
                                <td className="border">Dalton</td>
                                <td className="border">Bven/tura</td>
                                <td className="border">10/30:am</td>
                                <td className="border">02/30:am</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <div className="flex flex-col justify-center items-center">
                    <h2>Timbiqui-Buenaventura</h2>
                </div>
                <p>Enbarcaciones de carga para el dia jueves 16 de abril</p>
                <section className="mb-2 sm:mb-5">
                    <table className="table-auto w-full">
                        <thead className="bg-neutral-500   ">
                            <tr className="border">
                                <th>Embarcacion</th>
                                <th>Lugar</th>
                                <th>Salida</th>
                                <th>Llegada</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="border">metrera</td>
                                <td className="border">Timbiqui</td>
                                <td className="border">06/30:am</td>
                                <td className="border">10/00:am</td>
                            </tr>
                            <tr className="border">
                                <td className="border">barco</td>
                                <td className="border">Bven/tura</td>
                                <td className="border">10/30:am</td>
                                <td className="border">02/30:am</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="mb-5">
                    <div className="flex flex-col justify-center items-center">
                        <h2>Timbiqui-Guapi</h2>
                    </div>
                    <p>Enbarcaciones programadas para el dia de mañana</p>
                    <table className="table-auto w-full">
                        <thead className="bg-neutral-500   ">
                            <tr className="border">
                                <th>Embarcacion</th>
                                <th>Lugar</th>
                                <th>Salida</th>
                                <th>Llegada</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="border">Fulano</td>
                                <td className="border">Timbiqui</td>
                                <td className="border">06/30:am</td>
                                <td className="border">09/00:am</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
        // <div 
        //   className="
        //     w-full
        //     text-white
        //     grid 
        //     grid-cols-2 
        //     sm:grid-cols-3 
        //     md:grid-cols-3 
        //     lg:grid-cols-4 
        //     xl:grid-cols-5 
        //     2xl:grid-cols-8 
        //     gap-4 
        //     mt-4
        //     p-4
        //   "
        // >
        //   pagina principal
        // </div>
    );
}

export default PageContent;
