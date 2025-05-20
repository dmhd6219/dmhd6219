const Me = () => {
    return (
        <section
            className="mt-32 mb-16 mx-auto max-w-screen-lg text-center font-bold text-4xl md:text-5xl lg:text-6xl"
            id="home"
        >
            <h1>
                Привет! Меня зовут{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-rose-600">
                    Святослав
                </span>
                , <br />Я{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
                    Frontend
                </span>{' '}
                разработчик, создающий современные веб-приложения.
            </h1>
            <span className="mt-5 text-lg text-muted-foreground max-w-screen-md block mx-auto">
                На данный момент я учусь в{' '}
                <a
                    href="https://innopolis.university/"
                    target="_blank"
                    className="text-innopolis"
                >
                    Университете Иннополис
                </a>{' '}
                на 4м курсе
                {/*и работаю Frontend разработчиком в {' '}*/}
                {/*<a href="https://yandex.ru/" target="_blank" className='text-yandex'>*/}
                {/*    компания-нейм*/}
                {/*</a>*/}.
            </span>
        </section>
    );
};

export default Me;
