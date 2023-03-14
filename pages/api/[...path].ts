// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError, isAxiosError } from "axios";
import https from "https";
import crypto from "crypto";
import colors from "colors";
import { join } from "path";

const api = axios.create({
    baseURL: "https://api.neople.co.kr/df",
    params: {
        apikey: process.env.API_KEY,
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
        secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    }),
});

const printStatus = (path: string, statusCode: number, statusText: string) => {
    if (statusCode >= 200 && statusCode < 300) {
        console.log(`${statusCode} ${colors.green(statusText)}    ${path}`);
    } else if (statusCode >= 300 && statusCode < 400) {
        console.log(`${statusCode} ${colors.yellow(statusText)}    ${path}`);
    } else if (statusCode >= 400) {
        console.log(`${statusCode} ${colors.red(statusText)}    ${path}`);
    }
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    /*try {
        let combinedPath = "";
        const { path, ...param } = req.query;
        Array.isArray(path) && (combinedPath = join(...path));
        console.log(combinedPath);
        const r = await api.get(combinedPath, { params: param });
        printStatus(combinedPath, r.status, r.statusText);
        return res.status(200).send(r.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response);
        }
        return res.status(400).send(error);
    }*/

        return res.status(200).send('hello world');
}
