import { TimetableObject } from '../TimetableData';

const axios = require('axios').default;

const SAVE_ROUTE = 'http://localhost:1337/timetable/save'
const SAVE_STATIC_ROUTE = 'http://localhost:1337/timetable/savestatic/'

const saveDynamicData = (obj : TimetableObject, id: string | undefined) =>{
    obj.id = id;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

}

const saveStaticData = (obj : TimetableObject) => {

}

export default {saveDynamicData, saveStaticData};