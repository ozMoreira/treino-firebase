import { firebase } from './config';

export function storeRecords(records){
    firebase
    .database()
    .ref('records/')
    .set(records);
}

export function fetchRecords(setRecords){
    firebase
        .database()
        .ref('records/')
        .on('value', (snapshot) => {
            const records = snapshot.val();
            (records === null)? setRecords([]) : setRecords(records);
        });
}