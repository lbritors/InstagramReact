import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";


export default function SideBar() {
    return (
    <div className="sidebar">
        <Usuario/>
        <Sugestoes/>
    </div>
    )
}