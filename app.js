{
    "name": "Jinwiil Session Generator",
    "description": "I'm Web Session Generator by  𝐉𝚰𝚴𝐖𝚰𝚰𝐋 𝚯𝚴𝐆𝚰𝚴𝐉𝚯 🕷️🕸️",
    "logo": "",
    "repository": "https://github.com/Giftedmaurice/giftedmdV2-session-generator",
    "keywords": ["@Xcelsama"],
    "success_url": "/", 
    "buildpacks": [{ "url": "https://github.com/heroku/heroku-buildpack-nodejs#latest" } ],
    "env": {      
      "PORT": {
        "description": "Port for web app.4000,5000,3000... any!",
        "value": "5000",
        "required": false 
      },
      "MESSAGE": {
        "description": "",
        "value": "",
        "required": false 
      }
    }   

}