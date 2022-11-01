// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

const EMAILS_FILE_PATH = process.env.NODE_ENV === 'production' ? '/app/data/emails.txt' : 'data/emails.txt';

type Data = {
  success: boolean
}

const extractEmail = (req: NextApiRequest) => {
    return req[req.method === 'POST' ? 'body' : 'query']?.email;
}

const readFileByLine = async (filepath: string, onLine: Function) => {
  let buf = '';
  if (!fs.existsSync(filepath)) {
    return;
  }
  for await ( const chunk of fs.createReadStream(filepath) ) {
    const lines = buf.concat(chunk).split(/\r?\n/);
    buf = lines.pop();
    for( const line of lines ) {
      if (!onLine(line)) {
        break;
      }
    }
  }
}

const isEmailAlreadySaved = async (email: string): Promise<boolean>  => {
  let emailAlreadySaved = false;
  await readFileByLine(EMAILS_FILE_PATH, (line: string) => {
    emailAlreadySaved = line === email;
    return !emailAlreadySaved;
  });
  return emailAlreadySaved;
}

const validateEmail = (email: string) => {
  return String(email)
      .toLowerCase()
      .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const saveEmail = async (req: NextApiRequest) => {
  const email = extractEmail(req);
  if (validateEmail(email) && !await isEmailAlreadySaved(email)) {
    fs.appendFileSync(EMAILS_FILE_PATH, `${email}\n`);
    return true;
  }
  return false;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  saveEmail(req).then(isEmailSaved => {
    res.status(isEmailSaved ? 200 : 403).json(
        {
          success: isEmailSaved
        }
    );
  });
}
