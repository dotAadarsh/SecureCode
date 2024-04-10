import React, { useEffect } from 'react';
import request from 'request';

const Generate = () => {
  useEffect(() => {
    const options = {
      method: 'POST',
      url: 'https://api.cloudflare.com/client/v4/accounts/account_id/ai/run/model_name',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer undefined'
      },
      body: { text: 'string' },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      {/* Your JSX content */}
    </div>
  );
};

export default Generate;
