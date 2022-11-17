import BgImg from '../../../../assets/images/bg.png';
import HeroImg from '../../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    // const css = `
 
    //   .my-selected:hover:not([disabled]) { 
    //     border-color: aqua;
    //     color: aqua;
    //   }
     
    // `;
 
    return (
        <div className="hero mx-auto" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroImg} className="rounded-lg lg:w-1/2 lg:pt-52 lg:pb-40" alt='Dentist chair' />
                <div className='lg:ml-44 lg:mt-20 lg:mr-32  rounded-2xl shadow-lg'>
                    {/* <style>{css}</style> */}
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        // modifiersClassNames={{
                        //     selected: 'my-selected',
                        // }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;