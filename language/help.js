/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

// Menu
exports.menu = (botname, pushname) => {
	return`Haii Kak ${pushname} π¦

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaikiπ`
}

// List
exports.list = (pushname) => {
	return`Hai kak ${pushname}π, silahkan dipilih list menu dibawah iniπ¦`
}

// All Menu
exports.allmenu = (prefix) => {
return`
βββ γ *Group Menu* γ
β ${prefix}linkgroup
β ${prefix}ephemeral [option]
β ${prefix}setppgc [image]
β ${prefix}setname [text]
β ${prefix}setdesc [text]
β ${prefix}group [option]
β ${prefix}editinfo [option]
β ${prefix}add @user
β ${prefix}kick @user
β ${prefix}hidetag [text]
β ${prefix}tagall [text]
β ${prefix}antilink [on/off]
β ${prefix}mute [on/off]
β ${prefix}promote @user
β ${prefix}demote @user
β ${prefix}vote [text]
β ${prefix}devote
β ${prefix}upvote
β ${prefix}cekvote
β ${prefix}hapusvote
ββββββββ

βββ γ *Rpg Menu* γ
β ${prefix}berburu
β ${prefix}mancing
β ${prefix}menambang
β ${prefix}mining
β ${prefix}heal
β ${prefix}profile
β ${prefix}inventory
β ${prefix}leaderboard
β ${prefix}buy
β ${prefix}sell
ββββββββ

βββ γ *Downloader Menu* γ
β ${prefix}tiktoknowm [url]
β ${prefix}tiktokwm [url]
β ${prefix}tiktokmp3 [url]
β ${prefix}instagram [url]
β ${prefix}twitter [url]
β ${prefix}twittermp3 [url]
β ${prefix}facebook [url]
β ${prefix}pinterestdl [url]
β ${prefix}ytmp3 [url]
β ${prefix}ytmp4 [url]
β ${prefix}getmusic [query]
β ${prefix}getvideo [query]
β ${prefix}umma [url]
β ${prefix}joox [query]
β ${prefix}soundcloud [url]
ββββββββ

βββ γ *Search Menu* γ
β ${prefix}play [query]
β ${prefix}yts [query]
β ${prefix}google [query]
β ${prefix}gimage [query]
β ${prefix}pinterest [query]
β ${prefix}wallpaper [query]
β ${prefix}wikimedia [query]
β ${prefix}ytsearch [query]
β ${prefix}ringtone [query]
β ${prefix}stalk [option] [query]
ββββββββ

βββ γ *Random Menu* γ
β ${prefix}coffe
β ${prefix}quotesanime
β ${prefix}motivasi
β ${prefix}dilanquote
β ${prefix}bucinquote
β ${prefix}katasenja
β ${prefix}puisi
β ${prefix}couple
β ${prefix}anime
β ${prefix}waifu
β ${prefix}husbu
β ${prefix}neko
β ${prefix}shinobu
β ${prefix}waifus (nsfw)
β ${prefix}nekos (nsfw)
β ${prefix}trap (nsfw)
β ${prefix}blowjob (nsfw)
ββββββββ

βββ γ *Text Pro Menu* γ
β ${prefix}3dchristmas
β ${prefix}3ddeepsea
β ${prefix}americanflag
β ${prefix}3dscifi
β ${prefix}3drainbow
β ${prefix}3dwaterpipe
β ${prefix}halloweenskeleton
β ${prefix}sketch
β ${prefix}bluecircuit
β ${prefix}space
β ${prefix}metallic
β ${prefix}fiction
β ${prefix}greenhorror
β ${prefix}transformer
β ${prefix}berry
β ${prefix}thunder
β ${prefix}magma
β ${prefix}3dcrackedstone
β ${prefix}3dneonlight
β ${prefix}impressiveglitch
β ${prefix}naturalleaves
β ${prefix}fireworksparkle
β ${prefix}matrix
β ${prefix}dropwater
β ${prefix}harrypotter
β ${prefix}foggywindow
β ${prefix}neondevils
β ${prefix}christmasholiday
β ${prefix}3dgradient
β ${prefix}blackpink
β ${prefix}gluetext
ββββββββ

βββ γ *Photo Oxy Menu* γ
β ${prefix}shadow
β ${prefix}romantic
β ${prefix}smoke
β ${prefix}burnpapper
β ${prefix}naruto
β ${prefix}lovemsg
β ${prefix}grassmsg
β ${prefix}lovetext
β ${prefix}coffecup
β ${prefix}butterfly
β ${prefix}harrypotter
β ${prefix}retrolol
ββββββββ

βββ γ *Ephoto Menu* γ
β ${prefix}ffcover
β ${prefix}crossfire
β ${prefix}galaxy
β ${prefix}glass
β ${prefix}neon
β ${prefix}beach
β ${prefix}blackpink
β ${prefix}igcertificate
β ${prefix}ytcertificate
ββββββββ

βββ γ *Fun Menu* γ
β ${prefix}bagaimanakah
β ${prefix}kapankah
β ${prefix}apakah
β ${prefix}bisakah
β ${prefix}rate
β ${prefix}wangy
β ${prefix}gantengcek
β ${prefix}cekganteng
β ${prefix}cantikcek
β ${prefix}cekcantik
β ${prefix}sangecek
β ${prefix}ceksange
β ${prefix}cekme
β ${prefix}gaycek
β ${prefix}cekgay
β ${prefix}lesbicek
β ${prefix}halah
β ${prefix}hilih
β ${prefix}huluh
β ${prefix}heleh
β ${prefix}holoh
β ${prefix}jadian
β ${prefix}jodohku
β ${prefix}delttt
β ${prefix}tictactoe
β ${prefix}family100
β ${prefix}tebak [option]
β ${prefix}math [mode]
β ${prefix}suitpvp [@tag]
ββββββββ

βββ γ *Primbon Menu* γ
β ${prefix}nomorhoki
β ${prefix}artimimpi
β ${prefix}artinama
β ${prefix}ramaljodoh
β ${prefix}ramaljodohbali
β ${prefix}suamiistri
β ${prefix}ramalcinta
β ${prefix}cocoknama
β ${prefix}pasangan
β ${prefix}jadiannikah
β ${prefix}sifatusaha
β ${prefix}rezeki
β ${prefix}pekerjaan
β ${prefix}nasib
β ${prefix}penyakit
β ${prefix}tarot
β ${prefix}fengshui
β ${prefix}haribaik
β ${prefix}harisangar
β ${prefix}harisial
β ${prefix}nagahari
β ${prefix}arahrezeki
β ${prefix}peruntungan
β ${prefix}weton
β ${prefix}karakter
β ${prefix}keberuntungan
β ${prefix}memancing
β ${prefix}masasubur
β ${prefix}zodiak
β ${prefix}shio
ββββββββ

βββ γ *Convert Menu* γ
β ${prefix}toimage
β ${prefix}removebg
β ${prefix}sticker
β ${prefix}emojimix
β ${prefix}tovideo
β ${prefix}togif
β ${prefix}tourl
β ${prefix}tovn
β ${prefix}tomp3
β ${prefix}toaudio
β ${prefix}ebinary
β ${prefix}dbinary
β ${prefix}styletext
β ${prefix}smeme
ββββββββ

βββ γ *Main Menu* γ
β ${prefix}script
β ${prefix}speedtest
β ${prefix}ping
β ${prefix}owner
β ${prefix}menu
β ${prefix}delete
β ${prefix}infochat
β ${prefix}quoted
β ${prefix}listpc
β ${prefix}listgc
β ${prefix}listonline
ββββββββ

βββ γ *Database Menu* γ
β ${prefix}setcmd
β ${prefix}listcmd
β ${prefix}delcmd
β ${prefix}lockcmd
β ${prefix}addmsg
β ${prefix}listmsg
β ${prefix}getmsg
β ${prefix}delmsg
ββββββββ

βββ γ *Anonymous Menu* γ
β ${prefix}anonymous
β ${prefix}start
β ${prefix}next
β ${prefix}keluar
β ${prefix}sendkontak
ββββββββ

βββ γ *Islamic Menu* γ
β ${prefix}iqra
β ${prefix}hadist
β ${prefix}alquran
β ${prefix}juzamma
β ${prefix}tafsirsurah
ββββββββ

βββ γ *Voice Changer* γ
β ${prefix}bass
β ${prefix}blown
β ${prefix}deep
β ${prefix}earrape
β ${prefix}fast
β ${prefix}fat
β ${prefix}nightcore
β ${prefix}reverse
β ${prefix}robot
β ${prefix}slow
β ${prefix}tupai
ββββββββ

βββ γ *Owner Menu* γ
β ${prefix}react [emoji]
β ${prefix}chat [option]
β ${prefix}join [link]
β ${prefix}leave
β ${prefix}block @user
β ${prefix}unblock @user
β ${prefix}bcgroup [text]
β ${prefix}bcall [text]
β ${prefix}setppbot [image]
β ${prefix}setexif
ββββββββ

βββ γ *Thanks To* γ
β DikaArdnt
β Zeeoneofc
β FatihArridho
β Sanzy
β Yoga
β RiychDwayne
β Rifza 
β Arifi Razzaq
β Deff
β Katame
β Yuda
ββββββββ
`
}

// Donasi
exports.donasi  = (ownernomer) => {
	return`
-------γ *Donate* γ-------

Hai kak βΊοΈ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti π
Thanks!

-------γ *Sewa & Jadi Bot* γ-------

βββ γ *Sewa Bot* γ
β Sewa 5k/minggu
β Sewa 10k/bln
β Sewa Permanen 25k
ββββββββ

βββ γ *Jadi Bot* γ
β Jadi Bot 30k/bln
β Jadi Bot + Owner 35k
β Jasa Run Bot 20k
ββββββββ

Contact person Owner :
wa.me/${ownernomer}
`
}

// Simple Menu
exports.groupmenu = (prefix) => {
	return`
βββ γ *Group Menu* γ
β ${prefix}linkgroup
β ${prefix}ephemeral [option]
β ${prefix}setppgc [image]
β ${prefix}setname [text]
β ${prefix}setdesc [text]
β ${prefix}group [option]
β ${prefix}editinfo [option]
β ${prefix}add @user
β ${prefix}kick @user
β ${prefix}hidetag [text]
β ${prefix}tagall [text]
β ${prefix}antilink [on/off]
β ${prefix}mute [on/off]
β ${prefix}promote @user
β ${prefix}demote @user
β ${prefix}vote [text]
β ${prefix}devote
β ${prefix}upvote
β ${prefix}cekvote
β ${prefix}hapusvote
ββββββββ
`
}

exports.rpgmenu = (prefix) => {
	return`
βββ γ *Rpg Menu* γ
β ${prefix}berburu
β ${prefix}mancing
β ${prefix}menambang
β ${prefix}mining
β ${prefix}heal
β ${prefix}profile
β ${prefix}inventory
β ${prefix}leaderboard
β ${prefix}buy
β ${prefix}sell
ββββββββ
`
}

exports.downloadermenu = (prefix) => {
	return`
βββ γ *Downloader Menu* γ
β ${prefix}tiktoknowm [url]
β ${prefix}tiktokwm [url]
β ${prefix}tiktokmp3 [url]
β ${prefix}instagram [url]
β ${prefix}twitter [url]
β ${prefix}twittermp3 [url]
β ${prefix}facebook [url]
β ${prefix}pinterestdl [url]
β ${prefix}ytmp3 [url]
β ${prefix}ytmp4 [url]
β ${prefix}getmusic [query]
β ${prefix}getvideo [query]
β ${prefix}umma [url]
β ${prefix}joox [query]
β ${prefix}soundcloud [url]
ββββββββ
`
}

exports.searchmenu = (prefix) => {
	return`
βββ γ *Search Menu* γ
β ${prefix}play [query]
β ${prefix}yts [query]
β ${prefix}google [query]
β ${prefix}gimage [query]
β ${prefix}pinterest [query]
β ${prefix}wallpaper [query]
β ${prefix}wikimedia [query]
β ${prefix}ytsearch [query]
β ${prefix}ringtone [query]
β ${prefix}stalk [option] [query]
ββββββββ
`
}

exports.randommenu = (prefix) => {
	return`
βββ γ *Random Menu* γ
β ${prefix}coffe
β ${prefix}quotesanime
β ${prefix}motivasi
β ${prefix}dilanquote
β ${prefix}bucinquote
β ${prefix}katasenja
β ${prefix}puisi
β ${prefix}couple
β ${prefix}anime
β ${prefix}waifu
β ${prefix}husbu
β ${prefix}neko
β ${prefix}shinobu
β ${prefix}waifus (nsfw)
β ${prefix}nekos (nsfw)
β ${prefix}trap (nsfw)
β ${prefix}blowjob (nsfw)
ββββββββ
`
}

exports.textpromenu = (prefix) => {
	return`
βββ γ *Text Pro Menu* γ
β ${prefix}3dchristmas
β ${prefix}3ddeepsea
β ${prefix}americanflag
β ${prefix}3dscifi
β ${prefix}3drainbow
β ${prefix}3dwaterpipe
β ${prefix}halloweenskeleton
β ${prefix}sketch
β ${prefix}bluecircuit
β ${prefix}space
β ${prefix}metallic
β ${prefix}fiction
β ${prefix}greenhorror
β ${prefix}transformer
β ${prefix}berry
β ${prefix}thunder
β ${prefix}magma
β ${prefix}3dcrackedstone
β ${prefix}3dneonlight
β ${prefix}impressiveglitch
β ${prefix}naturalleaves
β ${prefix}fireworksparkle
β ${prefix}matrix
β ${prefix}dropwater
β ${prefix}harrypotter
β ${prefix}foggywindow
β ${prefix}neondevils
β ${prefix}christmasholiday
β ${prefix}3dgradient
β ${prefix}blackpink
β ${prefix}gluetext
ββββββββ
`
}

exports.photooxymenu = (prefix) => {
	return`
βββ γ *Photo Oxy Menu* γ
β ${prefix}shadow
β ${prefix}romantic
β ${prefix}smoke
β ${prefix}burnpapper
β ${prefix}naruto
β ${prefix}lovemsg
β ${prefix}grassmsg
β ${prefix}lovetext
β ${prefix}coffecup
β ${prefix}butterfly
β ${prefix}harrypotter
β ${prefix}retrolol
ββββββββ
`
}

exports.ephotomenu = (prefix) => {
	return`
βββ γ *Ephoto Menu* γ
β ${prefix}ffcover
β ${prefix}crossfire
β ${prefix}galaxy
β ${prefix}glass
β ${prefix}neon
β ${prefix}beach
β ${prefix}blackpink
β ${prefix}igcertificate
β ${prefix}ytcertificate
ββββββββ
`
}

exports.funmenu = (prefix) => {
	return`
βββ γ *Fun Menu* γ
β ${prefix}bagaimanakah
β ${prefix}kapankah
β ${prefix}apakah
β ${prefix}bisakah
β ${prefix}rate
β ${prefix}wangy
β ${prefix}gantengcek
β ${prefix}cekganteng
β ${prefix}cantikcek
β ${prefix}cekcantik
β ${prefix}sangecek
β ${prefix}ceksange
β ${prefix}cekme
β ${prefix}gaycek
β ${prefix}cekgay
β ${prefix}lesbicek
β ${prefix}halah
β ${prefix}hilih
β ${prefix}huluh
β ${prefix}heleh
β ${prefix}holoh
β ${prefix}jadian
β ${prefix}jodohku
β ${prefix}delttt
β ${prefix}tictactoe
β ${prefix}family100
β ${prefix}tebak [option]
β ${prefix}math [mode]
β ${prefix}suitpvp [@tag]
ββββββββ
`
}

exports.primbonmenu = (prefix) => {
	return`
βββ γ *Primbon Menu* γ
β ${prefix}nomorhoki
β ${prefix}artimimpi
β ${prefix}artinama
β ${prefix}ramaljodoh
β ${prefix}ramaljodohbali
β ${prefix}suamiistri
β ${prefix}ramalcinta
β ${prefix}cocoknama
β ${prefix}pasangan
β ${prefix}jadiannikah
β ${prefix}sifatusaha
β ${prefix}rezeki
β ${prefix}pekerjaan
β ${prefix}nasib
β ${prefix}penyakit
β ${prefix}tarot
β ${prefix}fengshui
β ${prefix}haribaik
β ${prefix}harisangar
β ${prefix}harisial
β ${prefix}nagahari
β ${prefix}arahrezeki
β ${prefix}peruntungan
β ${prefix}weton
β ${prefix}karakter
β ${prefix}keberuntungan
β ${prefix}memancing
β ${prefix}masasubur
β ${prefix}zodiak
β ${prefix}shio
ββββββββ
`
}

exports.convertmenu = (prefix) => {
	return`
βββ γ *Convert Menu* γ
β ${prefix}toimage
β ${prefix}removebg
β ${prefix}sticker
β ${prefix}emojimix
β ${prefix}tovideo
β ${prefix}togif
β ${prefix}tourl
β ${prefix}tovn
β ${prefix}tomp3
β ${prefix}toaudio
β ${prefix}ebinary
β ${prefix}dbinary
β ${prefix}styletext
ββββββββ
`
}

exports.mainmenu = (prefix) => {
	return`
βββ γ *Main Menu* γ
β ${prefix}script
β ${prefix}speedtest
β ${prefix}ping
β ${prefix}owner
β ${prefix}menu / ${prefix}help / ${prefix}?
β ${prefix}delete
β ${prefix}infochat
β ${prefix}quoted
β ${prefix}listpc
β ${prefix}listgc
β ${prefix}listonline
ββββββββ
`
}

exports.databasemenu = (prefix) => {
	return`
βββ γ *Database Menu* γ
β ${prefix}setcmd
β ${prefix}listcmd
β ${prefix}delcmd
β ${prefix}lockcmd
β ${prefix}addmsg
β ${prefix}listmsg
β ${prefix}getmsg
β ${prefix}delmsg
`
}

exports.anonymousmenu = (prefix) => {
	return`
βββ γ *Anonymous Menu* γ
β ${prefix}anonymous
β ${prefix}start
β ${prefix}next
β ${prefix}keluar
β ${prefix}sendkontak
ββββββββ
`
}

exports.islamicmenu = (prefix) => {
	return`
βββ γ *Islamic Menu* γ
β ${prefix}iqra
β ${prefix}hadist
β ${prefix}alquran
β ${prefix}juzamma
β ${prefix}tafsirsurah
ββββββββ
`
}

exports.voicechargermenu = (prefix) => {
	return`
βββ γ *Voice Changerγ *
β ${prefix}bass
β ${prefix}blown
β ${prefix}deep
β ${prefix}earrape
β ${prefix}fast
β ${prefix}fat
β ${prefix}nightcore
β ${prefix}reverse
β ${prefix}robot
β ${prefix}slow
β ${prefix}tupai
ββββββββ
`
}

exports.ownermenu = (prefix) => {
	return`
βββ γ *Owner Menu* γ
β ${prefix}react [emoji]
β ${prefix}chat [option]
β ${prefix}join [link]
β ${prefix}leave
β ${prefix}block @user
β ${prefix}unblock @user
β ${prefix}bcgroup [text]
β ${prefix}bcall [text]
β ${prefix}setppbot [image]
β ${prefix}setexif
ββββββββ
`
}

exports.thanksto = () => {
	return`
βββ γ *Thanks To* γ
β Hentongers-Botz
β WilyKun702
β DikaArdnt
β DikaArdnt
β Zeeoneofc
β FatihArridho
β Sanzy
β Yoga
β RiychDwayne
β Rifza 
β Arifi Razzaq
β Deff
β Katame
β Yuda
ββββββββ
`
}