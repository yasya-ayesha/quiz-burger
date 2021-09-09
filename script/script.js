document.addEventListener('DOMContentLoaded', function() {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    
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
        
        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
                answerItem.innerHTML = `
                    <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
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
            questionTitle.textContent = `${questions[indexQuestion].question}`;

            if (numberQuestion == 0) {
                prevButton.classList.add('d-none');
            } else {
                prevButton.classList.remove('d-none');
            }
            if (numberQuestion == (questions.length - 1)) {
                nextButton.classList.add('d-none');
            } else {
                nextButton.classList.remove('d-none');
            }

            renderAnswers(indexQuestion);
        }

        renderQuestions(numberQuestion);

        nextButton.onclick = () => {
            numberQuestion++;
            renderQuestions(numberQuestion);
        }
        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
        }
    }
});


