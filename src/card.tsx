interface CardProps {
    imagen: string;
    titulo: string;
    Potencia: number;
    Velocidad: number;
    Carga: number;
}

const Card: React.FC<CardProps> = ({ imagen, titulo, Potencia, Velocidad, Carga }) => {
    const handleClick = () => {
        alert(`Has seleccionado a ${titulo}`);
      }
    return (
        <div className="card">
            <img src={imagen} alt={titulo} />
            <h2>{titulo}</h2>
            <p>Potencia: {Potencia}</p>
            <p>Velocidad: {Velocidad}</p>
            <p>Carga: {Carga}</p>
            <button onClick={handleClick}>Seleccionar</button>
        </div>
    );
};

export default Card;