/*
 * Title: Model of the FIle object in Edu Burg ERP
 * Description: Defines the structure of File object to be saved in the DB
 * Author: A.K.M Fozlol Hoq
 * Date: 16 August, 2021 
 *
 */

import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    file: {
        type: any,
    },
    code: {
        type: any,
    },
}
);

// File Model
const File = mongoose.model("File", fileSchema);
export default File;