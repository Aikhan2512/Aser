let card = [ 
{
    id : 1,
    name : "ПК с возможностями ИИ",
    imageUrl : "Asets/acer-swift-edge-sfe16-43-fingerprint-backlit-wallpaper-olivine-black-01.webp",
    Text:"Ноутбуки, оснащенные новейшим аппаратным и программным обеспечением с поддержкой ИИ,открывают новые возможностидля продуктивной работы ивзаимодействия.",
},
{
    id : 2,
    name : "Для игр",
    imageUrl : "Asets/acer-swift-go-16-sfg16-72-with-fingerprint-with-backlit-on-wp-steel-gray-01.webp",
    Text:"Идеальные ноутбуки для прохождения уровней, прокачивания персонажей и сокрушения противников."
},
{
    id : 3,
    name: "Устойчивые продукты",
    imageUrl : "Asets/acer-aspire-vero-av15-53p-fingerprint-backlit-on-wallpaper-start-screen-cobblestone-gray-01-1.webp",
    Text: "Устройства, которые задают новые стандарты экологичности, чтобы сделать мир лучше"
},
{
    id : 4,
    name : "",
    imageUrl : "",
    Text:""
}
];







function createCard(card) {
    let cardDiv = document.createElement("div");
    let img = document.createElement("img");
    let heading = document.createElement("h1");
    let paragraph1 = document.createElement("p");
    let paragraph2 = document.createElement("p");
    let button = document.createElement("button");

    cardDiv.appendChild(img);
    cardDiv.appendChild(heading);
    cardDiv.appendChild(paragraph1);
    cardDiv.appendChild(paragraph2);
    paragraph2.appendChild(button);
    document.getElementById("container").appendChild(cardDiv);
    return;
}
createCard();
