import { Contacts } from './components/Contacts';
import { Stars } from './components/Stars';
import { Available } from './components/Available';
import { Location } from './components/Location';
import { Stack } from './components/Stack';

const About = () => {
    return (
        <section>
            <h1 className="text-4xl font-bold mb-4">Немного про меня</h1>
            <div className="w-full flex gap-x-4 items-stretch">
                {/*Левый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    <Contacts />

                    <Stars />
                </div>

                {/*Правый блок*/}
                <div className="w-1/2 flex flex-col gap-y-4">
                    <div className="flex gap-x-4">
                        {/*Доступен*/}
                        <Available />

                        {/*Локация*/}
                        <Location />
                    </div>

                    {/*Стек*/}
                    <Stack />
                </div>
            </div>
        </section>
    );
};

export default About;
