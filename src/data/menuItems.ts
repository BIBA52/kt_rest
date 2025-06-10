export interface MenuItem {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
}

export const menuItems: MenuItem[] = [
    {
        "id": 1,
        "name": "Цезарь с креветками",
        "category": "Салаты",
        "price": 450,
        "description": "Лёгкий салат с креветками, рукколой и пармезаном"
    },
    {
        "id": 2,
        "name": "Неаполитанская",
        "category": "Пицца",
        "price": 780,
        "description": "Тонкая пицца с томатами, моцареллой и базиликом"
    },
    {
        "id": 3,
        "name": "Лимонад с мяту",
        "category": "Напитки",
        "price": 140,
        "description": "Освежающий домашний лимонад с листьями мяты"
    },
    {
        "id": 4,
        "name": "Тирамису",
        "category": "Десерты",
        "price": 320,
        "description": "Классический итальянский десерт с кофе и маскарпоне"
    },
    {
        "id": 5,
        "name": "Пепперони",
        "category": "Пицца",
        "price": 690,
        "description": "Острая пицца с колбасой пепперони и сыром моцарелла"
    },
    {
        "id": 6,
        "name": "Зелёный чай с жасмином",
        "category": "Напитки",
        "price": 150,
        "description": "Ароматный зелёный чай с цветами жасмина"
    },
    {
        "id": 7,
        "name": "Медовик",
        "category": "Десерты",
        "price": 270,
        "description": "Многослойный торт с мёдом и сметанным кремом"
    },
    {
        "id": 8,
        "name": "Азия-смесь",
        "category": "Салаты",
        "price": 410,
        "description": "Салат с экзотическими овощами, тофу и кунжутом"
    },
    {
        "id": 9,
        "name": "Эспрессо",
        "category": "Напитки",
        "price": 110,
        "description": "Крепкий итальянский кофе в классической подаче"
    },
    {
        "id": 10,
        "name": "Фетучини с грибами",
        "category": "Паста",
        "price": 590,
        "description": "Паста ручной работы с лесными грибами и сливочным соусом"
    }
]