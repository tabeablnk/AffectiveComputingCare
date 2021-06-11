export class Patient{
        
        id: number;
        name: string;
        vorname: string;
        station: number;
        zimmer: number;
        pfleger: string;
        videoPath: string;

        constructor(id:number, name:string, vorname:string, station:number, zimmer:number, pfleger:string, videoPath:string){
                this.id = id;
                this.name = name;
                this.vorname = vorname;
                this.station = station;
                this.zimmer = zimmer;
                this.pfleger = pfleger;
                this.videoPath = videoPath;
        }
}