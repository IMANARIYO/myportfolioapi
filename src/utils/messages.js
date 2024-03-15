
let company="fablab rwanda"
export const htmlMessageOfapplicationytr= `
<html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f5f5f5;
        color: #333;
        margin: 20px;
      }
      h1 {
        color: #4285f4;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }
    </style>
    <title>Application Successful</title>
  </head>
  <body>
    <h1>Thank you for applying!</h1>
    <p>Your application was successful. We will review the information you have provided, and you will receive a response soon!</p>
  </body>
</html>
`;

export const htmlMessageApprovegfdfgfd= `
<html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #e6ffe6;
        color: #006600;
        margin: 20px;
      }
      h1 {
        color: #006600;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }
    </style>
    <title>Application Approved</title>
  </head>
  <body>
    <h1>Congratulations!</h1>
    <p>Your application has been approved. Welcome to our community!</p>
  </body>
</html>
`;

export const  htmlMessageRejected = (bodyMessage, gender, name) => {
  // Make gender case-insensitive
  const lowerCaseGender = gender.toLowerCase();

  // Determine title based on gender
  const title = lowerCaseGender === 'male' ? 'Mr.' : lowerCaseGender === 'female' ? 'Ms.' : '';

  // Greet the applicant based on gender
  const greeting = title ? `Dear ${title} ${name},` : `Dear ${name},`;

  // Construct the HTML message with styles
  const htmlMessage = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
          }

          p {
            margin-bottom: 15px;
          }

          h1 {
            color: #e74c3c;
          }
        </style>
        <title>Application Rejected</title>
      </head>
      <body>
        <h1>Application Rejected</h1>
        <p>${greeting}</p>
        <p>${bodyMessage}</p>
        <p>We appreciate your interest in our program. If you have any questions, feel free to reach out.</p>
        <p>Best regards,</p>
        <p>${company}</p>
      </body>
    </html>
  `;

  return htmlMessage;
};

export const htmlMessageOfapplication= `
<html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f5f5f5;
        color: #333;
        margin: 20px;
      }
      h1 {
        color: #4285f4;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }
    </style>
    <title>Application Successful</title>
  </head>
  <body>
    <h1>Thank you for applying!</h1>
    <p>Your application was successful. We will review the information you have provided, and you will receive a response soon!</p>
  </body>
</html>
`;

export const htmlMessagerespondContact = (subject,bodyMessage, name,company) => {

   `Dear ${name},`;
  // Construct the HTML message with styles
  const htmlMessage = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
          }

          p {
            margin-bottom: 15px;
          }

          h1 {
            color: #009688;
          }
        </style>
        <title>Your Application Status</title>
      </head>
      <body>
        <h1>response from musa health care</h1>
         <p>${subject}</p>
        <p>${bodyMessage}</p>
        <p>Best regards,</p>
        <p>${company}</p>
      </body>
    </html>
  `;

  return htmlMessage;
};


export const signupHtmlMessage= `
<html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #ffcccc;
        color: #cc0000;
        margin: 20px;
      }
      h1 {
        color: #cc0000;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }
    </style>
    <title>signup goes well</title>
  </head>
  <body>
    <h1> succeful registration on fab lab</h1>
    <p>registaraton message.</p>
  </body>
</html>
`;

export const  htmlMessageWaitingList = (bodyMessage, gender, name) => {
  // Make gender case-insensitive
  const lowerCaseGender = gender.toLowerCase();

  // Determine title based on gender
  const title = lowerCaseGender === 'male' ? 'Mr.' : lowerCaseGender === 'female' ? 'Ms.' : '';

  // Greet the applicant based on gender
  const greeting = title ? `Dear ${title} ${name},` : `Dear ${name},`;

  // Construct the HTML message with styles
  const htmlMessage = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
          }

          p {
            margin-bottom: 15px;
          }

          h1 {
            color: #3498db;
          }
        </style>
        <title>Application on Waiting List</title>
      </head>
      <body>
        <h1>Application on Waiting List</h1>
        <p>${greeting}</p>
        <p>${bodyMessage}</p>
        <p>We will notify you as soon as a spot becomes available. Thank you for your patience.</p>
        <p>Best regards,</p>
        <p>${company}</p>
      </body>
    </html>
  `;

  return htmlMessage;
};

// Function to generate HTML message for responding to contact
export const htmlMessagerespondAppointment = (subject, bodyMessage, name, company) => {
  // Construct the HTML message with styles
  const htmlMessage = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
          }

          p {
            margin-bottom: 15px;
          }

          h1 {
            color: #009688;
          }
        </style>
        <title>Your Application Status</title>
      </head>
      <body>
        <h1>Response from Musa Health Care</h1>
        <p>${subject}</p>
        <p>${bodyMessage}</p>
        <p>Best regards,</p>
        <p>${company}</p>
      </body>
    </html>
  `;

  return htmlMessage;
};

// Example usage within the context of responding to an appointment request
