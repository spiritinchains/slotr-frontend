import { TimetableObject } from '../TimetableData';

const axios = require('axios').default;

const GET_ROUTE = 'http://localhost:1337/timetable/get/';
const GET_STATIC_ROUTE = 'http://localhost:1337/timetable/getstatic/';
const SAVE_ROUTE = 'http://localhost:1337/timetable/save';
const SAVE_STATIC_ROUTE = 'http://localhost:1337/timetable/savestatic/';

const createRoutineData = async () : Promise<TimetableObject> =>{
    let obj = {
        "name": "Routine",
        "numrows": 0,
        "numcols": 0,
        "rows": [],
        "cols": [],
        "slots": []
    };

    let res = await axios.post(SAVE_ROUTE, {timetable: obj});

    if(res != undefined)
        return res.data.result;
    else
        return obj;
    
}

const saveDynamicData = (obj : TimetableObject, id: string | undefined) =>{
    obj.id = id;

    axios.post(SAVE_ROUTE, {timetable: obj})
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error : any) {
        console.log(error);
      });
}

const saveStaticData = (obj : TimetableObject, id: string | undefined) => {
    if(id == undefined)
    {
        console.log("ERROR, STATIC SAVE REQUIRES AN ID");
    }
    obj.id = id;
    axios.post(SAVE_STATIC_ROUTE, {timetable: obj})
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error : any) {
        console.log(error);
      });
}

const getDynamicData = async (id : string) : Promise<TimetableObject>=> {
    let result : TimetableObject = {
        "name": "Routine",
        "numrows": 0,
        "numcols": 0,
        "rows": [],
        "cols": [],
        "slots": []
    };

    let res = await axios.get(GET_ROUTE + id);

    if(res != undefined)
        return res.data.result;
    else
        return result;
}

const getStaticData = async (id: string) => {
    let result : TimetableObject = {
        "name": "Routine",
        "numrows": 0,
        "numcols": 0,
        "rows": [],
        "cols": [],
        "slots": []
    };
    
    let res = await axios.get(GET_STATIC_ROUTE + id);
    if(res != undefined)
        return res.data.result;
    else
        return result;
}


export default {saveDynamicData, saveStaticData, getDynamicData, getStaticData, createRoutineData};