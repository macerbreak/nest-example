import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as uuid from "uuid"
import * as path from "path"
import * as fs from "fs";

@Injectable()
export class FilesService {
    async createFile(file):Promise<string>{
        try{

            const fileName = uuid.v4() + ".jpg"
            const filePath = path.resolve(__dirname, "..", "static")
            console.log({fileName, filePath})
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive:true})
            }

            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        }
        catch(e){
            throw new HttpException("Something wrong during file writing", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
