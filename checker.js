var fs = require('fs');
const axios = require('axios-https-proxy-fix');
const lineReader = require('line-reader');
const gradient = require('gradient-string');
const clc = require('cli-color');
const randomUseragent = require('random-useragent');
const setTitle = require('console-title');
const config = require('./config.json');
 var onbes= 0;
var onaltı= 0;
var onyedi= 0;
var onsekiz= 0;
var ondokuz= 0;
var yirmi= 0;
var yirmibir= 0;
var yirmiiki= 0;
var  invalid=0;

function logo(){
  console.log(gradient.vice(`
████████╗ ██████╗ ██╗  ██╗███████╗███╗   ██╗     ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗███████╗██████╗ 
╚══██╔══╝██╔═══██╗██║ ██╔╝██╔════╝████╗  ██║    ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝██╔════╝██╔══██╗
   ██║   ██║   ██║█████╔╝ █████╗  ██╔██╗ ██║    ██║     ███████║█████╗  ██║     █████╔╝ █████╗  ██████╔╝
   ██║   ██║   ██║██╔═██╗ ██╔══╝  ██║╚██╗██║    ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ██╔══╝  ██╔══██╗
   ██║   ╚██████╔╝██║  ██╗███████╗██║ ╚████║    ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗███████╗██║  ██║
   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝     ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝

                                          By Elminsterxld#0007
\n`))}


function check_token(token, proxy) {
  if (proxy){
    proxy = proxy.split(':')
    if (proxy.length === 2){
      proxy = {
        host: proxy[0],
        port: proxy[1]
      }
    }
    else{
      proxy = {
        host: proxy[2],
        port: proxy[3],
        auth: {username: proxy[0], password: proxy[1]}
      }
    }
  }
  
		if(token) {
			token = token.split(":")
			if(token.length === 3) {
			        mail = token[0],
				    pass = token[1]
					tk=  token[2]
				
			} else {
			
					tk = token[0]
				
			}
		}
	
		  let content = '';
            if (config.mail_pass_token){
				 content = `[+] Discord Token Checker [+]\n[+] ${mail}:${pass}:${tk}`
            content += '\n\n'
          
            }
            else{
			    content = tk+'\n';
          }
          
  setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  axios.get("https://discord.com/api/v9/users/@me", {
      headers: {
        'Authorization': tk,
        'User-Agent': randomUseragent.getRandom( ua => ua.browserName === 'Chrome')
      },
      proxy: proxy
    }).then(
      response => {
        if (response.status == 200) {
  
          var data = response.data;
let a = data.id

  const timestamp = ((a / 4194304) + 1420070400000);
let x =  new Date(timestamp).toUTCString()

  console.log(clc.green(` [+] Alive token: ${data.username}#${data.discriminator}\n ID: ${data.id} \n ${x}`))

           
            
        
          
if( timestamp > 1420070400000 && timestamp <1451606400000) {
	
 onbes+= 1
setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
fs.appendFile(__dirname + '/2015.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving 2015 token to file'))
            })
}else 
if( timestamp > 1451606400000 && timestamp <1483228800000) {

 onaltı+= 1
setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
fs.appendFile(__dirname + '/2016.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving 2016 token to file'))
            })

} else 
if( timestamp > 1483228800000 && timestamp <1514764800000) {


 onyedi+= 1
setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
fs.appendFile(__dirname + '/2017.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving 2017 token to file'))
            })

} else 
if( timestamp > 1514764800000 && timestamp <1546300800000) {


 onsekiz+= 1
setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
fs.appendFile(__dirname + '/2018.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving 2018 token to file'))
            })

} else 
if( timestamp > 1546300800000 && timestamp <1577836800000) {



 ondokuz+= 1
setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
fs.appendFile(__dirname + '/2019.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving 2019 token to file'))
            })

} else 
if( timestamp > 1577836800000 && timestamp <1609459200000) {

           
 yirmi+= 1
setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
fs.appendFile(__dirname + '/2020.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving 2020 token to file'))
            })

} else 

if( timestamp > 1609459200000 && timestamp <1609459200000) {

           
 yirmibir+= 1
setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
fs.appendFile(__dirname + '/2021.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving 2021 token to file'))
            })

} else 
if( timestamp > 1640995200000 && timestamp < 1672531200000) {

 yirmiiki+= 1
setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
  fs.appendFile(__dirname + '/2022.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving 2022 token to file'))
            })

} 
		
	  

          
          
        }
        else {
          console.log(clc.red("[!] Unknown error with token:", tk, response.status))
          invalid += 1
		setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
          if (config.save_invalid){
            fs.appendFile(__dirname + '/invalid.txt', content, err => {
              if (err) console.log(clc.red('[!] Error saving invalid token to file'))
            })
          }
      }
    }
    )
    .catch(
      error => {
        if (error.code === "ERR_SOCKET_BAD_PORT"){
          console.log(clc.red("[!] Bad Proxy"))
          return
        }
        else if (!error.response){
          console.log(clc.yellow(error.message))
        }
        else if (error.response.status === 401) {
          console.log(clc.red("[-] Bad token:", tk))
          invalid += 1
		setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
          if (config.save_invalid){
            fs.appendFile(__dirname + '/invalid.txt', tk+'\n', err => {
              if (err) console.log(clc.red('[!] Error saving invalid token to file'))
            })
          }
        }
        else if (error.response.status == 403) {
          console.log(clc.yellow("[-] Locked token:", tk))
          invalid += 1
		setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
          if (config.save_locked){
            fs.appendFile(__dirname + '/locked.txt', tk+'\n', err => {
              if (err) console.log(clc.red('[!] Error saving invalid token to file'))
            })
          }
        }
        else {
          console.log(clc.red("[!] Unknown error with token:", tk))
          invalid += 1
		setTitle(`Token Age Checker | 2015 : ${onbes} | 2016 : ${onaltı} | 2017: ${onyedi} | 2018 : ${onsekiz} |  2019 : ${ondokuz} |  2020 : ${yirmi} |  2021 : ${yirmibir} | 2022 : ${yirmiiki}  | İnvalid : ${invalid} `);
  
          if (config.save_invalid){
            fs.appendFile(__dirname + '/invalid.txt', tk+'\n', err => {
              if (err) console.log(clc.red('[!] Error saving invalid token to file'))
            })
          }
        }
      }
    )
}

async function main(){
  if (config.use_proxy){
    try{
      var proxies = fs.readFileSync(__dirname + '/proxies.txt', 'utf8')
      proxies = proxies.split('\r\n')
    } catch (err) {
      console.log(clc.red("[!] Error reading proxy file:", err.message))
      return
    }    
  }
  lineReader.eachLine(__dirname + '/tokens.txt',(line,last)=>{
    if (config.use_proxy){

      check_token(line, proxies[Math.floor(Math.random()*proxies.length)])
    }
    else{
      check_token(line)
    }
  })
  
}

logo()
main()
