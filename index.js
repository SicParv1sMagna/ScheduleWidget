const schedule = {
    "numerator": {
        "monday": {
            "9:00-10:35": {
                "discipline": "ИНО",
                "classroom": "608/611",
                "type": "Семинар",
                "lecturer": undefined,
            },
            "10:45-12:20": {
                "discipline": "Технологии мультимедия",
                "classroom": "517",
                "type": "Лекция",
                "lecturer": "Афанасьев",
            },
            "13:05-14:40": {
                "discipline": "Описание жизн. процессов АСОИУ",
                "classroom": "500",
                "type": "Лекция",
                "lecturer": "Черненький М.В."
            },
            "14:50-16:25": {
                "discipline": "Описание жизн. процессов АСОИУ",
                "classroom": "500",
                "type": "Семинар",
                "lecturer": "Черненький М.В."
            },
        },
        "tuesday": {
            "9:00-10:35": {
                "discipline": "Исследование операций",
                "classroom": "602",
                "type": "Лекция",
                "lecturer": "Довбыш С.А."
            },
            "10:45-12:20": {
                "discipline": "Философия",
                "classroom": "602",
                "type": "Лекция",
                "lecturer": undefined,
            },
            "13:05-14:40": {
                "discipline": "Философия",
                "classroom": "602",
                "type": "Семинар",
                "lecturer": undefined,
            },
        },
        "wednesday": {
            "8:30-10:05": {
                "discipline": "СТ АСОИУ",
                "classroom": "903",
                "type": "Лабораторная",
                "lecturer": "Антонов А.И."
            },
            "10:15-11:50": {
                "discipline": "СТ АСОИУ",
                "classroom": "903",
                "type": "Лабораторная",
                "lecturer": "Антонов А.И."
            },
            "12:00-13:35": {
                "discipline": "СТ АСОИУ",
                "classroom": "903",
                "type": "Лабораторная",
                "lecturer": "Антонов А.И."
            },
            "15:40-17:15": {
                "discipline": "Физ-ра",
                "classroom": undefined,
                "type": undefined,
                "lecturer": undefined,
            }
        },
        "thursday": "Спецподготовка",
        "friday": {
            "8:30-10:05": {
                "discipline": "Физ-ра",
                "classroom": undefined,
                "type": undefined,
                "lecturer": undefined,
            },
            "10:15-11:50": {
                "discipline": "СТ АСОИУ",
                "classroom": "903",
                "type": "Лабораторная",
                "lecturer": "Антонов А.И."
            },
            "12:00-13:35": {
                "discipline": "Сет. прогр. обучение",
                "classroom": "903",
                "type": "Лекция",
                "lecturer": "Семкин",
            },
            "13:50-15:25": {
                "discipline": "ТМО",
                "classroom": "395",
                "type": "Лекция",
                "lecturer": "Гапанюк Ю.Е."
            },
            "15:40-17:15": {
                "discipline": "ТМО",
                "classroom": "365",
                "type": "Лабораторная",
                "lecturer": "Гапанюк Ю.Е."
            }
        },
        "saturday": undefined,
        "sunday": undefined,
    },
    "denominator": {
        "monday": {
            "9:00-10:35": {
                "discipline": "ИНО",
                "classroom": "608/611",
                "type": "Семинар",
                "lecturer": undefined,
            },
            "10:45-12:20": {
                "discipline": "Технологии мультимедия",
                "classroom": "517",
                "type": "Лекция",
                "lecturer": "Афанасьев",
            },
            "13:05-14:40": {
                "discipline": "Описание жизн. процессов АСОИУ",
                "classroom": "500",
                "type": "Лекция",
                "lecturer": "Черненький М.В."
            },
            "14:50-16:25": {
                "discipline": "Описание жизн. процессов АСОИУ",
                "classroom": "500",
                "type": "Семинар",
                "lecturer": "Черненький М.В."
            },
        },
        "tuesday": {
            "9:00-10:35": {
                "discipline": "Исследование операций",
                "classroom": "602",
                "type": "Лекция",
                "lecturer": "Довбыш С.А."
            },
            "10:45-12:20": {
                "discipline": "Философия",
                "classroom": "602",
                "type": "Лекция",
                "lecturer": undefined,
            },
            "13:05-14:40": {
                "discipline": "Исследование операций",
                "classroom": "602",
                "type": "Семинар",
                "lecturer": "Довбыш С.А."
            }
        },
        "wednesday": {
            "10:15-11:50": {
                "discipline": "ТМО",
                "classroom": "903",
                "type": "Лекция",
                "lecturer": "Гапанюк Ю.Е."
            },
            "12:00-13:35": {
                "discipline": "ТМО",
                "classroom": "903",
                "type": "Лекция",
                "lecturer": "Гапанюк Ю.Е."
            },
            "15:40-17:15": {
                "discipline": "Физ-ра",
                "classroom": undefined,
                "type": undefined,
                "lecturer": undefined,
            }
        },
        "thursday": "Спецподготовка",
        "friday": {
            "8:30-10:05": {
                "discipline": "Физ-ра",
                "classroom": undefined,
                "type": undefined,
                "lecturer": undefined,
            },
            "12:00-13:35": {
                "discipline": "Сет. прогр. обучение",
                "classroom": "903",
                "type": "Лекция",
                "lecturer": "Семкин",
            },
            "13:50-15:25": {
                "discipline": "Сет. прогр. обучение",
                "classroom": "903",
                "type": "Лабораторная",
                "lecturer": "Семкин",
            },
            "15:40-17:15": {
                "discipline": "ТМО",
                "classroom": "365",
                "type": "Лабораторная",
                "lecturer": "Гапанюк Ю.Е."
            }
        },
        "saturday": undefined,
        "sunday": undefined,
    }
};

const translations = {
    'monday': 'Понедельник',
    'tuesday': 'Вторник',
    'wednesday': 'Среда',
    'thursday': 'Четверг',
    'friday': 'Пятница',
    'saturday': 'Суббота',
    'sunday': 'Воскресенье',
    'discipline': 'Предмет',
    'classroom': 'Аудитория',
    'type': 'Тип',
    'lecturer': 'Лектор',
    'numerator': 'Числитель',
    'denominator': 'Знаменатель',
    'today': 'Сегодня',
    'tomorrow': 'Завтра',
    'nextWeek': 'След. неделя'
};

Date.prototype.getWeekNumber = () => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const yearStart = new Date(date.getFullYear(), 0, 1);
    const weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    return weekNumber - 5;
};

const getNextWeekDay = (currentDay) => {
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    let index = weekdays.indexOf(currentDay);
    while (true) {
        index = (index + 1) % 5;
        if (schedule['numerator'][weekdays[index]] || schedule['denominator'][weekdays[index]]) {
            return weekdays[index];
        }
    }
}

const getWeekType = (weekNumber) =>
    weekNumber % 2 === 0 ? 'denominator' : 'numerator';

const getCurrentDayOfWeek = () =>
    new Date()
        .toLocaleString("en-US", { timeZone: "Europe/Moscow", weekday: "long" })
        .toLocaleLowerCase()


const getScheduleForCurrentDay = () => {
    const currentDayOfWeek = getCurrentDayOfWeek();
    const currentWeekNumber = new Date().getWeekNumber();
    const currentWeekType = getWeekType(currentWeekNumber);

    const currentSchedule = (() => {
        if (!schedule[currentWeekType][currentDayOfWeek]) {
            const nextDay = currentDayOfWeek === 'saturday' ?
                'friday' :
                getNextWeekDay(currentDayOfWeek);

            const nextDaySchedule = schedule[currentDayOfWeek === 'saturday' ||
            currentDayOfWeek === 'sunday' ?
            getWeekType(currentWeekNumber+1) :
            currentWeekType][nextDay];

            return {
                when: translations[currentDayOfWeek === 'saturday' ||
                    currentDayOfWeek === 'sunday' ?
                    'nextWeek' : 'tomorrow'],
                lectures: nextDaySchedule,
            }
        }

        return {
            when: translations["today"],
            lectures: schedule[currentWeekType][currentDayOfWeek],
        };
    })();

    return {
        day: translations[currentDayOfWeek],
        weekNumber: currentWeekNumber,
        type: translations[currentWeekType],
        currentSchedule: currentSchedule,
    }
}

const renderWidget = async () => {
    const widget = new ListWidget();

    const { day, weekNumber, type, currentSchedule } = getScheduleForCurrentDay();

    const headerStack = widget.addStack();
    const weekTypeText = headerStack.addText(`Неделя ${weekNumber} - ${type}`);
    weekTypeText.font = Font.boldSystemFont(14);
    weekTypeText.textColor = Color.white();
    widget.addSpacer(5);

    const tableStack = widget.addStack();
    const table = tableStack.addStack();
    table.layoutVertically();

    const scheduleKeys = Object.keys(currentSchedule.lectures);
    scheduleKeys.forEach(key => {
        const lecture = currentSchedule.lectures[key];
        const rowStack = table.addStack();
        rowStack.spacing = 5;

        const timeText = rowStack.addText(key);
        timeText.font = Font.systemFont(12);
        timeText.textColor = Color.white();
        
        let disciplineName = lecture.discipline.length > 20 ? lecture.discipline.slice(0, 17) + "..." : lecture.discipline;
        const disciplineText = rowStack.addText(disciplineName);
        disciplineText.font = Font.systemFont(12);
        disciplineText.textColor = Color.white();
        
        const classroomText = rowStack.addText(lecture.classroom ? lecture.classroom : " ");
        classroomText.font = Font.systemFont(12);
        classroomText.textColor = Color.white();
    });

    widget.backgroundColor = new Color("#1e1e1e");
    
    widget.addSpacer(5);

    if (config.runsInWidget) {
        Script.setWidget(widget);
    } else {
        widget.presentSmall();
    }
};

await renderWidget();