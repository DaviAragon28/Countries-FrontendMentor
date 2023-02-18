import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { ToTop } from "../components/ToTop";
import { Cards } from "./Cards";

export function Main() {
    return (
        <main className="py-10 px-10 flex flex-col gap-10 lg:gap-24">
            <div className=" flex flex-col gap-5 md:flex-row md:items-center md:justify-center lg:justify-evenly ">
                <Input />
                <Select />
            </div>
            <Cards />
            <ToTop />
        </main>
    )
}