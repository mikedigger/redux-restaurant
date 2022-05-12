import dishImg from './dishImg.png';

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

    getCafeDishes = () => {
        return [
            { icon: 'onion', descr: 'найсвіжіші продукти' },
            { icon: 'flash', descr: 'швидка доставка' },
            { icon: 'chef', descr: 'найкращі кухарі' },
            { icon: 'onion', descr: 'найсвіжіші продукти' }
        ]
    }

    getDishes = () => {
        return [
            this._generateDish({ title: 'Ягня', type: 'meat' }),
            this._generateDish({ title: 'Баран', type: 'meat' }),
            this._generateDish({ title: 'Гусак', type: 'meat' }),
            this._generateDish({ title: 'Фарширований осетер', type: 'meat' }),
            this._generateDish({ title: 'Запечений фазан', type: 'meat' }),
            this._generateDish({ title: 'Запечений заяць', type: 'meat' }),

            this._generateDish({ title: 'Ягня', type: 'cold' }),
            this._generateDish({ title: 'Баран', type: 'cold' }),
            this._generateDish({ title: 'Гусак', type: 'cold' }),
            this._generateDish({ title: 'Фарширований осетер', type: 'cold' }),
            this._generateDish({ title: 'Запечений фазан', type: 'cold' }),
            this._generateDish({ title: 'Запечений заяць', type: 'cold' }),

            this._generateDish({ title: 'Ягня', type: 'hot' }),
            this._generateDish({ title: 'Баран', type: 'hot' }),
            this._generateDish({ title: 'Гусак', type: 'hot' }),
            this._generateDish({ title: 'Фарширований осетер', type: 'hot' }),
            this._generateDish({ title: 'Запечений фазан', type: 'hot' }),
            this._generateDish({ title: 'Запечений заяць', type: 'hot' }),

        ]
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

    _generateTab = (type, value, active = false) => {
        return {
            id: this._id++,
            type,
            value,
            active
        }
    }

    getFormData = () => {
        return {
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
                { // pickup
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

        }
    }
}