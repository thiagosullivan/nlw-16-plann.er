import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDateStepProps{
    isGuestInputOpen: boolean,
    closeGuestsInput: () => void,
    openGuestsInput: () => void,
}

export function DestinationAndDateStep({isGuestInputOpen, closeGuestsInput, openGuestsInput}: DestinationAndDateStepProps){
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400"/>
                <input disabled={isGuestInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" placeholder="Para onde você vai?" />
            </div>

            <div className="flex items-center gap-2 ">
                <Calendar className="size-5 text-zinc-400"/>
                <input disabled={isGuestInputOpen} className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" placeholder="Quando?" />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestInputOpen ? (
                <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                Alterar local e data
                <Settings2 />
                </button>
            ) : (
                <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Continuar
                <ArrowRight className="size-5" />
                </button>
            )}
        
        </div>
    )
}