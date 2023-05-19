export const data = [
  {
    name: "Дом моды",
    entity: 'ООО "Алаведы ИНН"',
    id: "1",
    ownerId: '1',
    type: 'Лофт',
    adress: 'ул. Нижняя Сыромятническая, д. 10',
    workTime: '10:00',
    tel: '+7 (495) 620-08-83',
    email: 'ic@artplay.ru',
    site: 'https://www.artplay.ru/',
    square: '800',
    capacity: '80',
    inn: '7000000000',
    price: {day: '1000', hour: '100'},
    equipment: ['сцена, микрофон, видеокамера'],
    description:
      "Творческий и деловой квартал, где открыты мастерские, дизайнерские и архитектурные бюро, шоу-румы, магазины, а также организована инфраструктура для комфортного времяпрепровождения: кафе и рестораны, кинозал, клуб, книжный магазин.",
    rating: [{ userId: "1", rating: "1", review: 'все гавно' }, { userId: "2", rating: "5", review: 'все огонь' }],
    status: {status: 'Publish', textForReject: 'Некорректно указан ИНН'}, /// Publish/Blocked, Stoped
    coordinates: [55.76, 37.64]
  },
];


export const users = [
    {
        name: 'Иванов Иван Иванович',
        email: 'email@mail.ru',
        tel: '88005553535',
        jobTitle: 'директор',
        id: '1',
        role: 'landlord',

    },
    {
        name: 'Иванов Иван Иванович',
        email: 'email@mail.ru',
        tel: '88005553535',
        id: '2',
        role: 'tenant',

    },
    {
        name: 'Иванов Иван Иванович',
        email: 'email@mail.ru',
        id: '3',
        role: 'admin',

    },

]