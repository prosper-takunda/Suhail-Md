const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Harare,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "263713271179" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263713271179";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_37_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICA1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzksXG4gICAgICAgIDQxLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxL2ExTjlKK1h5QUxXY0p5VHZrWklqTTZLYUQxeDlISXg3dnZiTFUzMEpjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5QWRHNGRNUlFUcXg1ZlhOSXFTQi1RXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwNmI2NjdjLWQxMGItNGViNy1hOWU1LTdkNmY1YTMwMTIyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICAxOTUsXG4gICAgICAxODUsXG4gICAgICAxOSxcbiAgICAgIDE2MixcbiAgICAgIDIwNyxcbiAgICAgIDU5LFxuICAgICAgMjIzLFxuICAgICAgMTE5LFxuICAgICAgNjUsXG4gICAgICAxNDgsXG4gICAgICAxOCxcbiAgICAgIDEwMSxcbiAgICAgIDg3LFxuICAgICAgMTU0LFxuICAgICAgNDcsXG4gICAgICAyNTEsXG4gICAgICAyNDksXG4gICAgICA1NixcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTMwLFxuICAgICAgMTUwLFxuICAgICAgMCxcbiAgICAgIDIwMyxcbiAgICAgIDQyLFxuICAgICAgMTI1LFxuICAgICAgMjA3LFxuICAgICAgMTc4LFxuICAgICAgNyxcbiAgICAgIDE4LFxuICAgICAgMjE3LFxuICAgICAgNDcsXG4gICAgICAyMDEsXG4gICAgICAxNjEsXG4gICAgICA2MSxcbiAgICAgIDE0MyxcbiAgICAgIDE3NyxcbiAgICAgIDExMSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5UUFHNTZQOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEzMjcxMTc5OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MTczNjUwODQ5Nzk5OTozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTFA4TlFCRUxqRjdySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNpZmRpMG81L3VDdk5taVhpcDhXemhRYnlwVXBVWE0vNDA5TFoxbVo5ejQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicERNRHljdGd2bHorTUcxUlphK1hQb0hxajFNWENrSEpPSStIYUhZbWZxN3JOVkZNOFpFSnp6TG93TGJaa1pCZDJSS2piaUZLek45bURtRENlWWpLQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUnlaMTVCdUR2Q2JvSVgxKzZWQytXUFo2V2l5eFVNRXNkdWhZamJFWEQvME1rbEZyalo5ZjVUK0xnMVFSMzM2aXo1K2pzcGY2TjRINDJldUhBamQxQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzEzMjcxMTc5OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzI4MTQ2OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // 
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Prosper",
  ownername:process.env.OWNER_NAME|| "Prosper#",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
