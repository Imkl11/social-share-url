exports.getShareImagePage = (req, res) => {
    const path = req.params[0];
    const imageUrl = `https://res.cloudinary.com/dkj5mbfq7/image/upload/${path}`;
    const title = "Profit & Loss Card";
    const description = "Check out my profit and loss summary!";

    const userAgent = req.headers['user-agent']?.toLowerCase();
    const isBot = /facebook|twitter|linkedin|discord|whatsapp|telegram|bot|crawler|spider|slack/.test(userAgent);

    if (!isBot) {
        // Redirect normal users directly to the image
        return res.redirect(imageUrl);
    }
    
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${imageUrl}" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="${imageUrl}" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${description}" />
      <meta name="twitter:image" content="${imageUrl}" />
    </head>
    <body>
      <script>
        window.location.href = "${imageUrl}";
      </script>
    </body>
    </html>
  `;

    return res.status(200).send(html);

}