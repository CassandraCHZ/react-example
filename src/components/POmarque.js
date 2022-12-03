export default function MarquePO() {
    return (
        <div style={{ textAlign: "center" }}>
            <marquee direction="left" SCROLLDELAY="30">
                <h3 style={{ color: "#006655" }} >Responsabilidad</h3>
            </marquee>
            <marquee behavior="scroll" direction="right" scrollamount="15">
                <h3 style={{ color: "#006655" }} >Innovación</h3>
            </marquee>
            <marquee behavior="scroll" direction="up" scrollamount="3">
                <h3 style={{ color: "#006655" }} >Confianza</h3>
            </marquee>
            <marquee behavior="scroll" direction="left" scrollamount="12">
                <h1 style={{ color: "#006655",fontSize:68+"pt" }} ><img
                    src="/react-example/Images/carro.png"
                    title="Logo"
                    alt="Logo del Proyecto"
                    width="130"
                    height="118" />Electricar</h1>
                
            </marquee>
            <marquee behavior="scroll" direction="right" scrollamount="13">
                <h3 style={{ color: "#006655" }} >Puntualidad</h3>
            </marquee>
            <marquee style={{ textAlign: "right" }} behavior="scroll" direction="down" scrollamount="3">
                <h3 style={{ color: "#006655" }} >Profesionalidad</h3>
            </marquee>

            <marquee behavior="scroll" direction="left" scrollamount="15">
                <h3 style={{ color: "#006655" }}>Calidad</h3>
            </marquee>
        </div>
    );
}