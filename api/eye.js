export default function handler(req, res) {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=86400');

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%">
      <stop offset="0%" stop-color="#B9A8E8"/>
      <stop offset="100%" stop-color="#DAD2F4"/>
    </radialGradient>
  </defs>

  <!-- Background Circle -->
  <circle cx="200" cy="200" r="195" fill="url(#bg)" stroke="none">
    <animate attributeName="r" values="190;195;190" dur="3s" repeatCount="indefinite"/>
  </circle>

  <!-- Eye Shape -->
  <ellipse cx="200" cy="200" rx="120" ry="72" fill="#DAD2F4" stroke="#212123" stroke-width="3"/>

  <!-- Iris -->
  <circle cx="200" cy="200" r="36" fill="#212123">
    <animate attributeName="cx" values="200;210;200;190;200" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="200;195;205;200;200" dur="4s" repeatCount="indefinite"/>
  </circle>

  <!-- Pupil Highlight -->
  <circle cx="188" cy="188" r="10" fill="#fff" opacity="0.9">
    <animate attributeName="cx" values="188;198;188;178;188" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="188;183;193;188;188" dur="4s" repeatCount="indefinite"/>
  </circle>

  <!-- Eyelid Top -->
  <path d="M80 164C80 164 128 128 200 128C272 128 320 164 320 164V200H80V164Z" fill="#FFEEEE">
    <animate attributeName="d"
      values="M80 164C80 164 128 128 200 128C272 128 320 164 320 164V200H80V164Z;
              M80 200C80 200 128 200 200 200C272 200 320 200 320 200V200H80V200Z;
              M80 200C80 200 128 200 200 200C272 200 320 200 320 200V200H80V200Z;
              M80 164C80 164 128 128 200 128C272 128 320 164 320 164V200H80V164Z"
      keyTimes="0;0.1;0.15;1"
      dur="5s" repeatCount="indefinite"/>
  </path>

  <!-- Eyelid Bottom -->
  <path d="M80 236C80 236 128 272 200 272C272 272 320 236 320 236V200H80V236Z" fill="#FFEEEE"/>
</svg>`;

  res.status(200).send(svg);
}
