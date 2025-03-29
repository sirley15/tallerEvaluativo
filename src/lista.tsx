import Card from "./card";

const ListaCard = () => {
    const personajes = [
        {
            imagen: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png",
            titulo: "Shrek",
            Potencia: 100,
            Velocidad: 50,
            Carga: 120
        },
        {
            imagen: "https://1.bp.blogspot.com/-s5NOY4oG_-Q/YUFW8-QS7II/AAAAAAAATm0/7agxQ8QAn-U_NvkzELnga0lziiT_vKpWACLcBGAsYHQ/s16000/transparent-png-burro-shrek-clipart%2B%252889%2529.png",
            titulo: "Burro",
            Potencia: 60,
            Velocidad: 80,
            Carga: 90
        },
        {
            imagen: "https://www.imagenbonita.com/img/imagenes-de-shrek-en-png/imagen-png-gato-con-botas.png",
            titulo: "Gato con Botas",
            Potencia: 85,
            Velocidad: 95,
            Carga: 60
        },
        {
            imagen: "https://static.miraheze.org/greatcharacterswiki/5/5a/Fiona_Ogre_Forever_After_Portrait.png",
            titulo: "Fiona",
            Potencia: 90,
            Velocidad: 75,
            Carga: 100
        },
        {
            imagen: "https://th.bing.com/th/id/R.dd95de3a9e3b024a6cb4d5a284ebd123?rik=qrVTHtW3FQapPw&pid=ImgRaw&r=0",
            titulo: "Rumpelstiltskin",
            Potencia: 40,
            Velocidad: 55,
            Carga: 30
        },
    ];

    return (
        <div className="lista-card">
            {personajes.map((personaje, index) => (
                <Card key={index} {...personaje} />
            ))}
        </div>
    );
};

export default ListaCard;