import axios from "axios";

const POST_ACCOUNT_URL = `https://portfoliomanager.energystar.gov/wstest/account`;

export async function postAccount( postData ) {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/xml'
    }
  }

  const { data } = await axios.post( `${POST_ACCOUNT_URL}`, postData, config );

  return data;
}