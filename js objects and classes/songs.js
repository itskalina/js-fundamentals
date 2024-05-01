function songs(array){

    class Song{
        constructor(type, name, time){
            this.type = type,
            this.name = name, 
            this.time = time
        }
    }

    let count = array.shift();
    let types = array.pop();

    let songList = [];

    for(i = 0; i < count; i++){
         let [type, name, time] = array[i].split('_');
         let song = new Song(type, name, time);
         songList.push(song);
    }

    if (types === 'all'){

        songList.forEach((i) => console.log(i.name));

    } else {

        let filterd = songList.filter((i) => i.type === types);
        filterd.forEach((i) => console.log(i.name));

    }


}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);