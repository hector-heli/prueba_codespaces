import {config} from "dotenv";
config();


export default {
    mongoURL: process.env.MONGODB_URI
}