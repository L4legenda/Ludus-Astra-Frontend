"use client";
import './DatePicker.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru'; // Если нужно использовать русский язык

registerLocale('ru', ru);

export const MyDatePicker = ({onChange}) => {
    const [startDate, setStartDate] = useState();

    const handleDate = (date) => {
        setStartDate(date)
        onChange && onChange(date)
    }

    useState(()=>{
        handleDate(new Date())
    }, [])

    return (
        <div className="dark-theme">
            <DatePicker
                selected={startDate}
                onChange={(date) => handleDate(date)}
                locale="ru"
                dateFormat="dd/MM/yyyy"
                className="dark-datepicker"
                wrapperClassName="dark-datepicker-wrapper"
            />
        </div>
    );
};
