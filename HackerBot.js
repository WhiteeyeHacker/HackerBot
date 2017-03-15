const Discord = require('discord.js');
const client = new Discord.Client();
//-----------------------------------------------------------------------------------------
var Author
var user
var victime
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
function commandIs(str, msg) { /// this function get rid of the "!" and considers following message as a command
	return msg.content.toUpperCase().startsWith("!" + str);
}
function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}
function hasRole(mem, role) { /// this function checks for user's role
	if(pluck(mem.roles).includes(role)) {
		return true;
	} else {
		return false;
	}
}
//-----------------------------------------------------------------------------------------
/*client.on('ready', () => {
  console.log('');
});
*/
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
client.on('message', message => { /// basicaly the start of the bot
	var args = message.content.split(/[ ]+/); /// makes sure that space between command and other is considered as an argument
//-----------------------------------------------------------------------------------------
	///Command using simple or no arguments
  if (commandIs("PING", message)){
  	message.reply('pong');
  }
  if (commandIs("HELP", message)){
  	message.delete() /// deletes the message
  	/// as seen below the character before the "here" is used if you wish to write multiple lines messages
  	message.reply(`Here are the commands availlable for now:
!Help: where you are now.
!Info: gives you infos about the bot.
`)
  }
  if (commandIs("INFO", message)){
  	message.delete()
  	message.channel.spassMessage("This is EliteSB's private bot coded by Pyth3rEx. For any questions or support ask him directly `Pyth3rEx#9752`. Regular updates will come overtime. Pre-alpha 0.3.3");
  }
//-----------------------------------------------------------------------------------------
  if (commandIs("SAY", message)){
  	message.delete()
    if (args.length > 1){
    	message.channel.spassMessage(message.author.username + " wants me to say: " + args[1]); /// a showcase of the use of arguments
  	}
  	else
    	message.channel.spassMessage("Error with the command. Usage: `!Say <messageToSay>`");
  }
//-----------------------------------------------------------------------------------------
  if (commandIs("BROADCAST", message)){
  	message.delete()
  	if(hasRole(message.member, "Leutenant") || hasRole(message.member, "Admin") || hasRole(message.member, "Moderator")) { ///a showcase of the use of role chacking
		if (args.length > 1){
  			message.channel.spassMessage(args.join(" ").substring(10));
  		}
  		else{
    		message.channel.spassMessage("Error with the command. Usage: `!Boardcast <messageToSay>`");
        }
   	}
  	else {
  		message.reply("Error, you do not have the proper rank to do so.");
  	}
  }

//-----------------------------------------------------------------------------------------
  /// Commands using one mention
  var input = message.content.toUpperCase() ;
  if (input.startsWith("!SHUT")){ /// example of the use of variables in a message
    user = message.author
    victime = message.mentions.users.first()
    message.delete()
//-----------------------------------------------------------------------------------------
    if(hasRole(message.member, "Owner") || hasRole(message.member, "Staff") || hasRole(message.member, "Admin") || hasRole(message.member, "Developer"))
    {
      message.channel.spassMessage(`!!!MODERATION NOTE!!! ${victime}, please do not spam/flood the chat. This is a warning message, if you still keep doing that thurther measures will be taken. Moderator: ${user}`)
    }
    else
    {
      message.channel.spassMessage(`Hey, who do you think you are ${user}? You'r not an Admin...`)
    }
  }
//-----------------------------------------------------------------------------------------
  if(input.startsWith("!SHOOT"))
  {
    user = message.author
    victime = message.mentions.users.first()
    message.delete()
    message.channel.spassMessage(`${user} does definately not like ${victime}. He takes he's huge 500MAgnum and blows ${victime}'s head. There is really nothing left of ${victime}.`)
  }
//-----------------------------------------------------------------------------------------
	if(input.startsWith("!WOT"))
  {
const exec = require('child_process').exec;
exec('searchsploit', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);

	function printtochnnel(element, index, array)
	{
		message.channel.spassMessage("Testingar : " + index + " => " + element);
	}
//-----------------------------------------------------------------------------------------
	var testing = `${error}`;
	var testingl = testing.length;
	var testingar = testing.length;
//-----------------------------------------------------------------------------------------
	testingar.forEach(printtochnnel);

	var testings = testing.split("\n");
	message.channel.spassMessage(testings[1]);
	message.channel.spassMessage(testingl);
	//message.channel.spassMessage(err.length);
	//message.channel.spassMessage(tempp.toString().length);
	//console.log(tempp.toString().length);


    return;
  }
/*	var testing = "hello";
	var testingl = testing.length;
	var err = `${stdout}`;
	var tempp = (`${stdout}`);
	message.channel.spassMessage(`testingl`);
	message.channel.spassMessage(err.length);
	message.channel.spassMessage(tempp.toString().length);
	console.log(tempp.toString().length);
	alert(`${stdout}`.toString().length);
	console.log(alert(`${stdout}`.toString().length));
	message.channel.spassMessage(alert(`${stdout}`.length));
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  message.channel.spassMessage(`stdout: ${stdout}`);
  message.channel.spassMessage(`stderr: ${stderr}`);
*/
});

  }


//-----------------------------------------------------------------------------------------
  /// Simple answer command
  if (commandIs("HEY", message)){
    message.delete()
    message.channel.spassMessage("How's it going?");
  }
 });

client.login('MjQzMzY0MjM1NjI5ODIxOTYy.C6JRyQ.FXFRoJYtU151c2g5oSfTrlwJXok');
