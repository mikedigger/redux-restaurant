import dishImg from './dishImg.png';
import promotionImg from './promotionImg.png';

export default class RestaurantService {

    _id = 0;

    _generateDish = (values) => {
        const {
            type = '',
            title = 'Ягня',
            weight = 200,
            price = 250,
            descr = 'Фаршироване грецькою кашею, курагою, апельсином та зеленим яблуком',
            nutVals: {
                proteins = 17.23,
                fats = 7.63,
                carbohydrates = 22.35,
                kilocalories = 234
            } = {}
        } = values;

        return {
            type,
            title, descr, weight, price,
            totalWeight: weight,
            totalPrice: price,

            img: dishImg,
            id: this._id++,
            count: 0,
            cartIsActive: true,
            countActive: false,

            nutritionalValue: {
                proteins,
                fats,
                carbohydrates,
                kilocalories
            },

            nutritionalValueSum: {
                proteins,
                fats,
                carbohydrates,
                kilocalories
            },
        }
    }

    _generateFormInput = (type, placeholder, rest = {}) => {

        const { required = false, inputType = 'text' } = rest;

        return {
            type,
            id: this._id++,
            placeholder,
            inputType,
            required,
        }
    }

    _generateDropdownItem = (value) => {
        return {
            type: 'pickup',
            value,
            id: this._id++,
        }
    }

    _generateAccordionItem = (title) => {
        return {
            id: this._id++,
            title,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, velit.',
            active: false
        }
    }

    _generatePromotionItem = (title) => {
        return {
            id: this._id++,
            title,
            img: promotionImg,
            text: 'У Харкові виготовили рекордний для України хот-дог завдовжки 216 см. Щоб винести хот-дог вагою 16 кг на сцену, знадобилася допомога шістьох людей. Хот-дог завдовжки 216 сантиметрів представили напередодні, 19 листопада, у Харкові, встановивши цим національний рекорд України в категорії "Кулінарне мистецтво", повідомляє "АТН".',
            expires: 'до 31 липня'
        }
    }

    getDishes = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (Math.random() > 0.25) {
                resolve(
                    [
                        { title: 'Ягня', type: 'cold' },
                        { title: 'Баран', type: 'cold' },
                        { title: 'Гусак', type: 'cold' },
                        { title: 'Фарширований осетер', type: 'cold' },
                        { title: 'Запечений фазан', type: 'cold' },
                        { title: 'Запечений заяць', type: 'cold' },

                        { title: 'Ягня', type: 'hot' },
                        { title: 'Баран', type: 'hot' },
                        { title: 'Гусак', type: 'hot' },
                        { title: 'Фарширований осетер', type: 'hot' },
                        { title: 'Запечений фазан', type: 'hot' },
                        { title: 'Запечений заяць', type: 'hot' },

                        { title: 'Ягня', type: 'meat' },
                        { title: 'Баран', type: 'meat' },
                        { title: 'Гусак', type: 'meat' },
                        { title: 'Фарширований осетер', type: 'meat' },
                        { title: 'Запечений фазан', type: 'meat' },
                        { title: 'Запечений заяць', type: 'meat' },

                    ].map(({ title, type }) => this._generateDish({ title, type }))
                )
                // } else {
                //     reject(new Error('something bad happened'))
                // }


            }, 700)
        })

    }

    getForm = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    contact: [
                        this._generateFormInput('contact', "Ім'я*", { required: true }),
                        this._generateFormInput('contact', "Телефон*", { required: true }),
                    ],

                    delivery: [
                        {
                            title: 'Доставка',
                            inputs: [
                                this._generateFormInput('delivery', "Вкажіть вулицю*", { required: true }),
                                this._generateFormInput('delivery', "Номер будинку*", { inputType: 'number' }),
                                this._generateFormInput('delivery', "Номер квартири/офісу", { inputType: 'number' }),
                                this._generateFormInput('delivery', "Підїзд", { inputType: 'number' }),
                                this._generateFormInput('delivery', "Поверх", { inputType: 'number' }),
                                this._generateFormInput('delivery', "Коментар")
                            ]
                        },
                        {
                            title: 'Самовивіз',
                            inputs: [
                                this._generateDropdownItem('Університетська, 1'),
                                this._generateDropdownItem('Площа Ринок, 1'),
                                this._generateDropdownItem('Кульпарківська, 500'),
                                this._generateDropdownItem('Червоної калини, 88')
                            ]
                        }
                    ],


                    payoff: [
                        {
                            title: 'Готівка',
                            inputs: [
                                this._generateFormInput('payoff', "Решта з"),
                            ]
                        },
                        {
                            title: 'Онлайн',
                            inputs: [
                                this._generateFormInput('contact', "Номер картки*", { required: true }),
                                this._generateFormInput('contact', "Термін дії*", { required: true }),
                                this._generateFormInput('contact', "cvv*", { required: true }),
                            ]
                        },
                        {
                            title: 'Картка',
                            inputs: []
                        }
                    ],

                    deliveryTime: {

                        tabs: [
                            {
                                title: 'Якнайшвидше',
                                inputs: [
                                    this._generateFormInput('deliveryTime', "Кількість осіб", { inputType: 'number' }),
                                ]
                            },

                            {
                                title: 'Точний час',
                                inputs: [
                                    this._generateFormInput('deliveryTime', "Вкажіть час"),
                                    this._generateFormInput('deliveryTime', "Кількість осіб", { inputType: 'number' })
                                ]
                            }
                        ],

                        checkboxes: {
                            title: 'Передзвонити ?',
                            checkboxItems: [
                                this._generateFormInput('deliveryTime', "Так", { inputType: 'checkbox' }),
                                this._generateFormInput('deliveryTime', "Ні", { inputType: 'checkbox' }),
                            ]
                        }


                    }

                })
            }, 500)
        })
    }

    getAccordion = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    'У наших курєрів завжди має бути здача',
                    'Вам щось недовезли?',
                    'Не сподобався продукт?',
                    'Якщо зявилися зауваження',
                    'Оплата Visa, MasterCart'
                ].map(item => this._generateAccordionItem(item)))

            }, 300)
        })
    }

    getPromotionData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    [
                        'Смачні хот-доги',
                        'Разом смачніше',
                        'Сирний бортик',
                        'Для вегетаріанців',
                        'Разом смачніше',
                        'Сирний бортик',
                        'Для вегетаріанців',
                        'Сирний бортик',
                        'Для вегетаріанців'
                    ].map(item => this._generatePromotionItem(item))
                )
            }, 300)
        })
    }
}