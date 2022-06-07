const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "MAOU Md"//namabot kalian
global.ownername= "VERDIKAWAII" //nama kalian
global.myweb ="https://api.ECUTING.xyz" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/muse indonesia" //bebas asal jan hapus
global.github = "https://VERDIBOTZ1.github.io/" //bebas
global.email = "puasa2022@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "6285706735450" // nomor wa kalian ya tod
global.ownernomerr = "+6285706735450" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/ff0923cd51b8e984a12f3.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["62887435047326","62887435047326","918156874290"] //ganti agar fitur owner bisa di gunakan
global.packname = '© STICKER By maou md' //sticker wm ubah
global.author = 'Di Buat Oleh VERDIBOTZ1' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿','√']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, memek longar~',
    admin: 'Perintah Ini Hanya Bisa Digunakan admin yang tercantik !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin,bdoh skali anda !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner yang tamvan !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur kuѕuѕ pєngunα вσt',
    errtoimg: 'мααғ gα вιsα sтιcкεя gιғ үα -_!',
    wait: '⏳ wαít ín mínutє.....',
	lockCmd: 'this feature is not activated by the owner!',
	example1: 'http://ẉww.wєlcσmє.dєtєct ωεℓcσмε тσ @user ιη gяσυρ @subject scrol Rules group @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name) MAU KASIH TAU OUT AJA YAH '
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
