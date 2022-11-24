import { DayPicker } from 'react-day-picker';
import BgImg from '../../../../assets/images/bg.png';
import HeroImg from '../../../../assets/images/chair.png';

const css = `
  .my-selected:hover:not([disabled]) { 
    border-color:  #00BFFF;
    color:  #00BFFF;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color:  #00BFFF;
  }
`;
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div className="hero mx-auto" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroImg} className="rounded-lg lg:w-1/2 lg:pt-36 lg:pb-40" alt='Dentist chair' />
                <div className='lg:ml-44 lg:mr-32  rounded-2xl shadow-lg'>
                <style>{css}</style>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        modifiersClassNames={{
                            selected: 'my-selected',
                            today: 'my-today'
                          }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;