document.addEventListener('DOMContentLoaded', function() {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    const sendButton = document.querySelector('#send');
    
    const questions = [
        {
            question: "Какого цвета бургер?",
            answers: [
                {
                    id: 'standard-bun',
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    id: 'black-bun',
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    id: 'chicken-meat',
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    id: 'beef-meat',
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    id: 'pork-meat',
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [
                {
                    id: 'tomato',
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    id: 'cucumber',
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    id: 'salad',
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    id: 'onion',
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [
                {
                    id: 'garic-sauce',
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    id: 'tomato-sauce',
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    id: 'mustard-sauce',
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    })
    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    })
    
    const playTest = () => {
        let numberQuestion = 0;
        const finalAnswers = [];
        
        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'justify-content-center');
                answerItem.innerHTML = `
                    <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none" value="${answer.title}">
                    <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${answer.url}" alt="burger">
                        <span>${answer.title}</span>
                    </label>
                `;
                formAnswers.appendChild(answerItem);
            })
        }

        const renderQuestions = (indexQuestion) => {
            formAnswers.innerHTML = '';
            
            // if (numberQuestion >= 0 && numberQuestion <= (questions.length - 1)) {
            //     questionTitle.textContent = `${questions[indexQuestion].question}`;
            //     renderAnswers(indexQuestion);
            //     nextButton.classList.remove('d-none');
            //     prevButton.classList.remove('d-none');
            //     sendButton.classList.add('d-none');
            // }

            // if (numberQuestion === 0) {
            //     prevButton.classList.add('d-none');
            // }

            // if (numberQuestion === questions.length) {
            //     questionTitle.textContent = 'Благодарим за ваш выбор';
            //     formAnswers.innerHTML = `
            //     <div class="mb-3">
            //         <label for="numberPhone" class="form-label">Укажите ваше имя</label>
            //         <input type="text" class="form-control" id="name" placeholder="Ваше имя">
            //         <label for="numberPhone" class="form-label">И ваш номер телефона</label>
            //         <input type="phone" class="form-control" id="numberPhone" placeholder="+38 067 123 45 67">
            //     </div>
            //     `;
            //     nextButton.classList.add('d-none');
            //     prevButton.classList.add('d-none');
            //     sendButton.classList.remove('d-none');
            // }
            // if (numberQuestion === questions.length + 1) {
            //     formAnswers.textContent = 'Спасибо за ваш выбор! Мы свяжемся с вами.';
            //     sendButton.classList.add('d-none');
            //     setTimeout(() => {
            //         modalBlock.classList.remove('d-block');
            //     }, 2000);
            // }
            
            switch (true) {
                case (numberQuestion > 0 && numberQuestion <= (questions.length - 1)):
                    questionTitle.textContent = `${questions[indexQuestion].question}`;
                    renderAnswers(indexQuestion);
                    nextButton.classList.remove('d-none');
                    prevButton.classList.remove('d-none');
                    sendButton.classList.add('d-none');
                    break;
                
                case (numberQuestion === 0):
                    prevButton.classList.add('d-none');
                    questionTitle.textContent = `${questions[indexQuestion].question}`;
                    nextButton.classList.remove('d-none');
                    sendButton.classList.add('d-none');
                    renderAnswers(indexQuestion);
                    break;

                case (numberQuestion === questions.length):
                    questionTitle.textContent = 'Благодарим за ваш выбор';
                    formAnswers.innerHTML = `
                        <div class="mb-3">
                            <label for="numberPhone" class="form-label">Укажите ваше имя</label>
                            <input type="text" class="form-control" id="name" placeholder="Ваше имя">
                            <label for="numberPhone" class="form-label">и ваш номер телефона</label>
                            <input type="phone" class="form-control" id="numberPhone" placeholder="+38 067 123 45 67">
                        </div>
                    `;
                    nextButton.classList.add('d-none');
                    prevButton.classList.add('d-none');
                    sendButton.classList.remove('d-none');
                    break;

                case (numberQuestion === questions.length + 1):
                    formAnswers.textContent = 'Спасибо за ваш выбор! Мы свяжемся с вами.';
                    sendButton.classList.add('d-none');
                    setTimeout(() => {
                        modalBlock.classList.remove('d-block');
                    }, 2000);
                    break;
            
                default:
                    alert('Упс! Что-то пошло не так!');
                    break;
            }
        }

        renderQuestions(numberQuestion);

        const checkAnswer = () => {
            const obj = {};
            const inputs = [...formAnswers.elements].filter((input) => input.checked || input.id === 'numberPhone');

            inputs.forEach((input, index) => {
                if (numberQuestion >= 0 && numberQuestion <= (questions.length - 1)) {
                    obj[`${index}_${questions[numberQuestion].question}`] = input.value;
                }
                if (numberQuestion === questions.length) {
                    obj['Номер телефона'] = input.value;
                }
            })
            finalAnswers.push(obj);
        }

        nextButton.onclick = () => {
            checkAnswer();
            numberQuestion++;
            renderQuestions(numberQuestion);
        }
        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
        }

        sendButton.onclick = () => {
            checkAnswer();
            numberQuestion++;
            renderQuestions(numberQuestion);
        }
    }
});


