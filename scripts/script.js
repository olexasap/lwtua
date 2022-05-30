//let fs = require('fs');
const songArr = [
    {
        "file": "8likG.m4a",
        "title": "Love Will Tear Us Apart",
        "artist": "Savlonic"
    },
    {
        "file": "uDTBY.m4a",
        "title": "Love Will Tear Us Apart",
        "artist": "Vitamin String Quartet"
    },
    {
        "file": "0gC32.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "PSYCHIC RITES"
    },
    {
        "file": "0hkpK.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Dryland"
    },
    {
        "file": "0MDjf.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Twinkle Twinkle Little Rock Star"
    },
    {
        "file": "0RcNB.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "glassarcana"
    },
    {
        "file": "0tsUP.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "controfase"
    },
    {
        "file": "0V3gb.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Music Box Mania"
    },
    {
        "file": "0V41R.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Outer Shape"
    },
    {
        "file": "0wlts.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "MARSHALL APPLEWHITE X LISE"
    },
    {
        "file": "1a5jS.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Daybreakers"
    },
    {
        "file": "1GMGB.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "June Tabor and the Oysterband"
    },
    {
        "file": "1k0xv.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Steven Schofield"
    },
    {
        "file": "1sqlh.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Amythyst Kiah"
    },
    {
        "file": "1ureE.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Scott Matthew"
    },
    {
        "file": "1Yr5u.mp3",
        "title": "Love Will Tear As Apart (Hello Again Fab piano re-edit)",
        "artist": "Hello Again"
    },
    {
        "file": "2fsNm.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Wally Tusk & The Film Club"
    },
    {
        "file": "2JrxF.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Prozak for Lovers"
    },
    {
        "file": "2nTB8.mp3",
        "title": "Pottajenkka",
        "artist": "Eläkeläiset"
    },
    {
        "file": "2oBJw.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Capitol 1212 feat.  Earl 16"
    },
    {
        "file": "2onvv.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Transmission"
    },
    {
        "file": "2pmKi.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Odina"
    },
    {
        "file": "2xOjh.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "DJ Scenester"
    },
    {
        "file": "3Bawy.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Acoustic Reverb"
    },
    {
        "file": "3NP19.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Tengw^r"
    },
    {
        "file": "3rgzB.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "JD Kelleher"
    },
    {
        "file": "4amEP.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mono Dual 721"
    },
    {
        "file": "4BbNK.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Ghostlove"
    },
    {
        "file": "4Ihit.mp3",
        "title": "love will tear us apart",
        "artist": "babybird"
    },
    {
        "file": "4vVWG.mp3",
        "title": "Love Will Tears Us Apart",
        "artist": "P.J. Proby"
    },
    {
        "file": "4wCNo.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Die Art"
    },
    {
        "file": "5anUv.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Melbourne Ukulele Kollective"
    },
    {
        "file": "5HJIV.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Ale'x Q"
    },
    {
        "file": "5LEm5.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Little Fox Music Box"
    },
    {
        "file": "5pndw.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Blood Divine"
    },
    {
        "file": "5TmWQ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Martina S."
    },
    {
        "file": "5V54e.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Jolley.2112"
    },
    {
        "file": "5ziUF.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Spirital"
    },
    {
        "file": "6CbZM.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Doors In The Labyrinth"
    },
    {
        "file": "6dKZ8.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Hawksley Workman"
    },
    {
        "file": "6kQun.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "cienfuegos"
    },
    {
        "file": "6nbGL.mp3",
        "title": "Love Will Tear Us Apart [Skylax]",
        "artist": "F.T.G & Myndrill"
    },
    {
        "file": "6uLb0.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Visionplex"
    },
    {
        "file": "6YKqj.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Plug a Chip"
    },
    {
        "file": "7SUpb.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Berlin Pop Choir"
    },
    {
        "file": "7TcHE.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Manic Mancs"
    },
    {
        "file": "7xEgC.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Joy Division"
    },
    {
        "file": "8Gztf.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Igor Siemann"
    },
    {
        "file": "8Kdkk.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Odhran"
    },
    {
        "file": "8XAbD.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Worm Is Green"
    },
    {
        "file": "9BKcj.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Bellestar"
    },
    {
        "file": "9EGAa.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Teardrop Cult"
    },
    {
        "file": "9feAw.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Tea Party"
    },
    {
        "file": "9fsiy.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Canal Caveira"
    },
    {
        "file": "9pExt.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mimi Page"
    },
    {
        "file": "9pnZH.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Atoms For Peace"
    },
    {
        "file": "9Q226.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mark Hamilton"
    },
    {
        "file": "9s1C5.mp3",
        "title": "Love Will Tear Us Apart II - Live MCMXCVI",
        "artist": "ANTEDEUM & MY FIRST TOY & MARCO LIPZ"
    },
    {
        "file": "28Si7.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Fatal Lapse"
    },
    {
        "file": "36Zq2.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Shanes"
    },
    {
        "file": "41WHS.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Tiger Baby"
    },
    {
        "file": "65jbm.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "mulder"
    },
    {
        "file": "90WZ3.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Crox & Sox"
    },
    {
        "file": "90XKJ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Laidback"
    },
    {
        "file": "113Pa.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Blame the Bankers"
    },
    {
        "file": "A9mvE.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Danny Yerna"
    },
    {
        "file": "aCtAp.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Epo"
    },
    {
        "file": "ad2OX.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Passenger"
    },
    {
        "file": "ADFEW.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Nordloef"
    },
    {
        "file": "AJJ8i.mp3",
        "title": "Love will tear us apart",
        "artist": "Rodolphe Burger"
    },
    {
        "file": "akCy0.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "jonnymee"
    },
    {
        "file": "AKrY0.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Flash Atkins"
    },
    {
        "file": "Al0J3.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Rhodes Piano Sessions"
    },
    {
        "file": "Al1ZK.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Wiebe Lammers"
    },
    {
        "file": "aOBOj.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Sister Spirit"
    },
    {
        "file": "as2mM.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Ghost Shepherd"
    },
    {
        "file": "az8R1.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "baby_lee"
    },
    {
        "file": "B0aoU.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Choir! Choir! Choir!"
    },
    {
        "file": "B3PLZ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Janet Devlin"
    },
    {
        "file": "b4zGr.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Bush"
    },
    {
        "file": "b7v5i.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Fog Lights"
    },
    {
        "file": "B27VN.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "TELETHON"
    },
    {
        "file": "BDGo9.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Shanes"
    },
    {
        "file": "bJ35E.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Unbroken"
    },
    {
        "file": "bjzZs.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Belezas Transitórias"
    },
    {
        "file": "Boo4m.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kismet"
    },
    {
        "file": "BoTNF.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Colour Sound Oblivion"
    },
    {
        "file": "BQZqb.mp3",
        "title": "",
        "artist": ""
    },
    {
        "file": "bRuSq.mp3",
        "title": "Love Will Tear Us Apart (consecutive mix)",
        "artist": "Desert Island Dicks"
    },
    {
        "file": "btLeR.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Maida Vale"
    },
    {
        "file": "bvdJQ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mixomatosiss"
    },
    {
        "file": "ByO1i.mp3",
        "title": "O Amor Vai Nos Separar",
        "artist": "Brincadeira"
    },
    {
        "file": "C7u8A.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "PLVS VLTRA"
    },
    {
        "file": "cAAHk.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "River Jay"
    },
    {
        "file": "ce2gi.mp3",
        "title": "Love Will Tear Us Apart (Stranger Mix)",
        "artist": "Everyone's A Crook vs.  ILS"
    },
    {
        "file": "CgVQd.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mr.  Dick"
    },
    {
        "file": "CI2Cq.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Silicone Babies"
    },
    {
        "file": "CI3nC.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "free cake for every creature"
    },
    {
        "file": "CLVH2.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "David Low-Fi"
    },
    {
        "file": "cMW9g.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Johnny Come Back"
    },
    {
        "file": "cPB0l.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Philistine"
    },
    {
        "file": "cqa0H.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Sonic Brother"
    },
    {
        "file": "cqaKn.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "melodywhore & The Joker Project"
    },
    {
        "file": "CQZao.mp3",
        "title": "Love Will Tear Us Apart (M–B Anti-Edit)",
        "artist": "Free Shelter"
    },
    {
        "file": "Ct24B.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "souvlakki"
    },
    {
        "file": "cVRRT.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Holy Holy"
    },
    {
        "file": "D1WpU.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Cure"
    },
    {
        "file": "D7uTg.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Tubylcy Betonu"
    },
    {
        "file": "DanXS.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Jodie Griffin"
    },
    {
        "file": "DbR63.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Stanton-Miranda"
    },
    {
        "file": "dfKnH.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Cody Frost"
    },
    {
        "file": "dfLDn.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kiki & Herb"
    },
    {
        "file": "DjhUP.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Alyce Cult"
    },
    {
        "file": "dK4hb.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Lucky Little Red House"
    },
    {
        "file": "DMV6T.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Nuns"
    },
    {
        "file": "Dndyt.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Lysa Flores"
    },
    {
        "file": "dPCh1.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "VEXÉ"
    },
    {
        "file": "dQk7J.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Messer Chups"
    },
    {
        "file": "duxYa.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Real Bang"
    },
    {
        "file": "dYwdY.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Noonie Baig"
    },
    {
        "file": "e3TbX.mp3",
        "title": "Music Will Tear Us Apart",
        "artist": "Sicc Puppy"
    },
    {
        "file": "E5BgZ.mp3",
        "title": "Love will tear us apart",
        "artist": "uvilov"
    },
    {
        "file": "EAjCH.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Progress In Color"
    },
    {
        "file": "EeKb9.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Eduardo Kusdra"
    },
    {
        "file": "eHQZJ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "100% Manmade Fibre"
    },
    {
        "file": "eHRgq.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Frankie's Dad"
    },
    {
        "file": "EPiFv.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Helena Leme"
    },
    {
        "file": "eTYuO.mp3",
        "title": "Love Will Tear Us Apart (Red Version)",
        "artist": "Swans"
    },
    {
        "file": "exq2h.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Iain Jackson"
    },
    {
        "file": "EZJSE.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Fans Of Otherwise"
    },
    {
        "file": "f6Mg4.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Dave The White"
    },
    {
        "file": "FAjnn.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Vylet"
    },
    {
        "file": "FDcr0.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Katrina Evernden"
    },
    {
        "file": "fKw7u.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Michelle Darkness & Hanna Pakarinen"
    },
    {
        "file": "flNz4.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Crimes of Passion"
    },
    {
        "file": "fmMef.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Meg Birch"
    },
    {
        "file": "FoFoi.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "DJ Kodi"
    },
    {
        "file": "fOrLF.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Woodlawn"
    },
    {
        "file": "Fq78Y.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Merry's Funeral"
    },
    {
        "file": "fslIB.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "PINK HAUS"
    },
    {
        "file": "FSt1A.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Nerina Pallot"
    },
    {
        "file": "FSYMN.mp3",
        "title": "Love Will Tear Us Apart (Mind Karaoke Cumbia Version)",
        "artist": "The Peronists"
    },
    {
        "file": "fXAGP.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Club Soda"
    },
    {
        "file": "fYmsi.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Trudd Studdlerucker"
    },
    {
        "file": "fzUsE.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "everbai"
    },
    {
        "file": "g0fxU.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "João Carrilho"
    },
    {
        "file": "G5i42.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Fixer"
    },
    {
        "file": "ga9uQ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Alicia Ukulele"
    },
    {
        "file": "gaaKx.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Heerhorst"
    },
    {
        "file": "GcRO5.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Red House Painters"
    },
    {
        "file": "gFsnl.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Siniestra Kabaret"
    },
    {
        "file": "Ghqir.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Susanna And The Magical Orchestra"
    },
    {
        "file": "Gi7FD.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Invisible Limits"
    },
    {
        "file": "gKf5I.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Arturo"
    },
    {
        "file": "GmMwe.mp3",
        "title": "Love Will Tear Us Apart Again - The Girl From The Song",
        "artist": "Osama Atiq"
    },
    {
        "file": "gmNYW.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Cura"
    },
    {
        "file": "gqsl0.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "usLights"
    },
    {
        "file": "GXRw4.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Shane"
    },
    {
        "file": "H0e4G.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Dan_fromthe_Past"
    },
    {
        "file": "h4UUZ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Paranoid Android"
    },
    {
        "file": "h4VEF.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "URCO"
    },
    {
        "file": "HcSzh.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "While Angels Watch"
    },
    {
        "file": "HCvW7.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Leigh Hamblin"
    },
    {
        "file": "hdlBC.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Naked Lunch"
    },
    {
        "file": "HEXV7.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mental 99"
    },
    {
        "file": "hFtE1.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "jOSEF"
    },
    {
        "file": "HKe2R.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Martin Yelswel"
    },
    {
        "file": "Hl1us.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "China - Touch"
    },
    {
        "file": "HlNMU.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The White Light Band"
    },
    {
        "file": "HpFAk.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Boy Division"
    },
    {
        "file": "htk9W.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Emily Grace"
    },
    {
        "file": "hzBKH.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "ELECTiC"
    },
    {
        "file": "I4By9.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "HARDWIJK"
    },
    {
        "file": "i8hSs.mp3",
        "title": "Love Will Tear Us Apart (feat.  Lowri)",
        "artist": "Stubb"
    },
    {
        "file": "IgfMy.mp3",
        "title": "Love Will-Separarnos",
        "artist": "The Black Jesús"
    },
    {
        "file": "iJPSO.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Parsonage"
    },
    {
        "file": "ikDko.mp3",
        "title": "Любовь разорвет на куски",
        "artist": "MadNotBad"
    },
    {
        "file": "IkU9D.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "psychic sushi"
    },
    {
        "file": "iMIWr.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Hēran Soun"
    },
    {
        "file": "IoGlw.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Jamie Lewis"
    },
    {
        "file": "iu411.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kalipo"
    },
    {
        "file": "iVqMs.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Bryan Evans"
    },
    {
        "file": "IyAit.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Alabama 3"
    },
    {
        "file": "iYmaP.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Districts"
    },
    {
        "file": "j3J8j.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Way Out West"
    },
    {
        "file": "J7MVe.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Moving Units"
    },
    {
        "file": "J7NGr.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Motion Sick"
    },
    {
        "file": "jbaW5.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Elliot Fletcher"
    },
    {
        "file": "jcS3t.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Carnival Of Fools"
    },
    {
        "file": "JFH3o.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "charlotte"
    },
    {
        "file": "JI481.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Lullaby Rock!"
    },
    {
        "file": "jl5aH.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Damhnait Doyle"
    },
    {
        "file": "Jt2yN.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Doctor Coffee"
    },
    {
        "file": "jW9D4.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Ferdi Fröhn-Kapelle"
    },
    {
        "file": "jxJo6.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "REVERE"
    },
    {
        "file": "k2HzL.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "(STEREO)SCOPY"
    },
    {
        "file": "k6Cdp.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kevin Gurney"
    },
    {
        "file": "Kc9TI.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "SNOWFALL"
    },
    {
        "file": "kDgz7.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Bryan"
    },
    {
        "file": "kfxqy.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Jake Worley"
    },
    {
        "file": "kKwal.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Boris M"
    },
    {
        "file": "KracJ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Poyzer"
    },
    {
        "file": "KSvPE.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Josh Paul"
    },
    {
        "file": "kUhhZ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Shem Mason"
    },
    {
        "file": "KwIc5.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Stan Matthews"
    },
    {
        "file": "LA6ay.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Stompcrash"
    },
    {
        "file": "LAkS5.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Camille Solenne"
    },
    {
        "file": "LB5pR.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "OK Doomer"
    },
    {
        "file": "LbTC8.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Marigrá Geranio"
    },
    {
        "file": "lFLJa.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "poqpie"
    },
    {
        "file": "LfwYk.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "DJ Dakeyne"
    },
    {
        "file": "ljchD.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "PHÆLIN"
    },
    {
        "file": "LkBsG.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Fall Out Boy"
    },
    {
        "file": "LrbsV.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Vostok"
    },
    {
        "file": "lsDvg.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mothership to Venus"
    },
    {
        "file": "lUL2F.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "emblem"
    },
    {
        "file": "lwyDq.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "cardiophobia"
    },
    {
        "file": "mdFyt.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Cat Baeybeees"
    },
    {
        "file": "MDZea.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Indi"
    },
    {
        "file": "mHENh.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Max Bauer"
    },
    {
        "file": "MiI5B.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Shane"
    },
    {
        "file": "mirfR.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Clock Strikes Thirteen"
    },
    {
        "file": "MjTWN.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Gaston Andrada"
    },
    {
        "file": "mnAL6.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "St. Dunstan"
    },
    {
        "file": "MNpb7.mp3",
        "title": "Love Will Tear Us Apart Again",
        "artist": "A Pink Nightmare"
    },
    {
        "file": "mPdyj.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Trouble Fait'"
    },
    {
        "file": "MROPL.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "La Rissa"
    },
    {
        "file": "mv0zS.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Alexa Melo"
    },
    {
        "file": "MvxGc.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Tarmac"
    },
    {
        "file": "mYEfs.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Monstieurs"
    },
    {
        "file": "mYmXu.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Bonggita"
    },
    {
        "file": "mzVH2.mp3",
        "title": "Doom Will Tear Us Apart (Hardcore Edit)",
        "artist": "Low Entropy"
    },
    {
        "file": "n4cG9.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "NIKA-KOI"
    },
    {
        "file": "n11k5.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Heavens"
    },
    {
        "file": "nbsxH.mp3",
        "title": "Love will tear us apart",
        "artist": "Fabián Echandía"
    },
    {
        "file": "nCBPO.mp3",
        "title": "Love Will Tear Us Apart vs. TEE",
        "artist": "cyberogre"
    },
    {
        "file": "NcEmW.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Von Vons"
    },
    {
        "file": "NHD5f.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "One Clover and a Bee"
    },
    {
        "file": "nhkVy.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "the Edge of no Escape"
    },
    {
        "file": "ni22X.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Vlaz Femmus"
    },
    {
        "file": "NIlsr.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Depresión Post-Mortem"
    },
    {
        "file": "nM1LK.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Pony Face"
    },
    {
        "file": "Nm4jS.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Missing Persons"
    },
    {
        "file": "nqtQI.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Dumboy"
    },
    {
        "file": "NU0X2.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "absinthè"
    },
    {
        "file": "NUIpg.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mariana de Souza"
    },
    {
        "file": "o4HrQ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Paper Road"
    },
    {
        "file": "O7NJi.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "John M"
    },
    {
        "file": "oAnxl.mp3",
        "title": "LOVE WILL TEAR US APART (SYB REMIX)",
        "artist": "DCNXTR"
    },
    {
        "file": "OB6mA.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Allophones"
    },
    {
        "file": "oGcgC.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Bogeyman's Tears"
    },
    {
        "file": "OL1zJ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Sleepless Inn"
    },
    {
        "file": "olV73.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kal Lavelle & Zoe Konez"
    },
    {
        "file": "Oprnu.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Adan & Ilse"
    },
    {
        "file": "orbX7.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Calexico"
    },
    {
        "file": "OXnvF.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Lea Jaffe"
    },
    {
        "file": "p9zFD.mp3",
        "title": "Love Will Tear Us Apart (What If Re-Birth Edit)",
        "artist": "Shahin Farzane"
    },
    {
        "file": "PGs5m.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Persistence In Mourning"
    },
    {
        "file": "PGtQz.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "VAGINA LIPS"
    },
    {
        "file": "Ph2kp.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "melmel420lol"
    },
    {
        "file": "pN1d5.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Fer Cirer"
    },
    {
        "file": "poAX8.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "R Plus"
    },
    {
        "file": "POUEl.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Disgraves"
    },
    {
        "file": "PPnNv.mp3",
        "title": "Love Will Tear Us Apart (Kinky Roland remix)",
        "artist": "Nocturne the Blonde"
    },
    {
        "file": "Pps8b.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Gustave Coquiot"
    },
    {
        "file": "PrsNl.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Richard Walters"
    },
    {
        "file": "puQOc.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "In The Nursery"
    },
    {
        "file": "pyvbh.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Oliver Cole"
    },
    {
        "file": "pZ8Xu.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Steven Webb"
    },
    {
        "file": "PzTlk.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Even Vast"
    },
    {
        "file": "q3wVX.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Vegas Band"
    },
    {
        "file": "Q5Vmd.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Last Hour"
    },
    {
        "file": "Q8ycp.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "March Division"
    },
    {
        "file": "q91Kf.mp3",
        "title": "Love will tear us apart",
        "artist": "CODO"
    },
    {
        "file": "qcWJJ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "DJ Venom"
    },
    {
        "file": "QJmVF.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "José González"
    },
    {
        "file": "QKQ4Q.mp3",
        "title": "Love Will Tear Us Apart (Black Version)",
        "artist": "Swans"
    },
    {
        "file": "qoBek.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Watchdog Reset"
    },
    {
        "file": "qOeBG.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Laura Jean"
    },
    {
        "file": "QPo3c.mp3",
        "title": "D Love Will Tear Us Apart (Elegy Version)",
        "artist": "The Post Romantic Empire Ensamble"
    },
    {
        "file": "QShCO.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Human Drama"
    },
    {
        "file": "qsXr7.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Terence O'Flaherty"
    },
    {
        "file": "qxKDv.mp3",
        "title": "Love (Will Tear Us Apart)",
        "artist": "Carl Brandt"
    },
    {
        "file": "r1kFo.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Permanence"
    },
    {
        "file": "R9ikG.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Windmill"
    },
    {
        "file": "rAp0A.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Jack Oatkon"
    },
    {
        "file": "rCS9K.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Skymobil"
    },
    {
        "file": "rCTpX.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "luvlocket"
    },
    {
        "file": "rgkdI.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Ghosts Of Paraguay"
    },
    {
        "file": "rKjXw.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Ad Luger"
    },
    {
        "file": "rqKVl.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Evelyn Evelyn"
    },
    {
        "file": "RVWZT.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Nouvelle Vague"
    },
    {
        "file": "rwCic.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "ocaminos"
    },
    {
        "file": "Rx0tf.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Ruth Dawnay"
    },
    {
        "file": "RXEQ5.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Darogan"
    },
    {
        "file": "RyIPr.mp3",
        "title": "Love Will Tear us Apart",
        "artist": "Francis Dunnery"
    },
    {
        "file": "SB6EK.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Arthur Baker"
    },
    {
        "file": "Sca86.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Crease"
    },
    {
        "file": "ScFpj.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kvinton"
    },
    {
        "file": "SEgL8.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "=FAT CASTRO="
    },
    {
        "file": "sFLdm.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Die Entweihung"
    },
    {
        "file": "sju4N.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Moonspell"
    },
    {
        "file": "sjvlu.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Mirrortones"
    },
    {
        "file": "Sl66W.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Jetdriver"
    },
    {
        "file": "Sm5mf.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Broken Social Scene"
    },
    {
        "file": "SQoge.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Talisha Karrer"
    },
    {
        "file": "SQovx.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Marc and the Millionaires"
    },
    {
        "file": "sRqIs.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "bis"
    },
    {
        "file": "SrXJA.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Shiver"
    },
    {
        "file": "sVMWf.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The King"
    },
    {
        "file": "sxlqB.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Unwoman"
    },
    {
        "file": "T0jXm.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Simple Minds"
    },
    {
        "file": "t2j7J.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "FOG"
    },
    {
        "file": "T3c1Z.mp3",
        "title": "Love will tear us apart",
        "artist": "DeadMargarita"
    },
    {
        "file": "tAeuH.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Jonah Masse"
    },
    {
        "file": "tDSRi.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Polytrue"
    },
    {
        "file": "TEL1P.mp3",
        "title": "Love Will Tear Us Apart (Live)",
        "artist": "Game Theory"
    },
    {
        "file": "terl8.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Squarepusher"
    },
    {
        "file": "tesBk.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "no-ne"
    },
    {
        "file": "tJ8HQ.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Hot 8 Brass Band"
    },
    {
        "file": "TLRw4.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Yat-Kha"
    },
    {
        "file": "toSyh.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Rudy Productions"
    },
    {
        "file": "TVLt0.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "PULSE!"
    },
    {
        "file": "Twkd3.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "imwest"
    },
    {
        "file": "ubf5z.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mantra Beats"
    },
    {
        "file": "UFuTq.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "MAYDA"
    },
    {
        "file": "UHWSU.mp3",
        "title": "Love Will Tear Us Apart (Falling Apart Mix)",
        "artist": "Miss Kittin vs.  Magda vs.  NYMA"
    },
    {
        "file": "uiOPB.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Shattered Grey"
    },
    {
        "file": "UjdKR.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Daydream District"
    },
    {
        "file": "UjVrS.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Apperaat"
    },
    {
        "file": "uMNyV.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "NotQuiteCam"
    },
    {
        "file": "urf7n.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Cure Termali"
    },
    {
        "file": "UVMed.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "U2 with Arcade Fire"
    },
    {
        "file": "ux2e8.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Conspired Network"
    },
    {
        "file": "v3wYk.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kriegsschwein"
    },
    {
        "file": "V7Aws.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Hey"
    },
    {
        "file": "V21w6.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Elektrik People"
    },
    {
        "file": "vHgPL.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Takuya Yamauchi"
    },
    {
        "file": "vlHnd.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "In Good Faith"
    },
    {
        "file": "VMjmT.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Rich Lizzard"
    },
    {
        "file": "VnS7W.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "岩本清顕 Kiyoaki Iwamoto"
    },
    {
        "file": "vvCBm.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Frontier Ruckus"
    },
    {
        "file": "VYFij.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "John Fog"
    },
    {
        "file": "vZ7Qa.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "8 Bit Mixtapes"
    },
    {
        "file": "W2Lf1.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Apoptygma Berzerk"
    },
    {
        "file": "w6I66.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Y'all Lost Control"
    },
    {
        "file": "w94qv.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Culture Kultür"
    },
    {
        "file": "Wafmx.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Nine Seconds"
    },
    {
        "file": "WGfDe.mp3",
        "title": "C Love Will Tear Us Apart",
        "artist": "The Post Romantic Empire Ensamble"
    },
    {
        "file": "Wh35O.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Maneki Nekoč"
    },
    {
        "file": "WruMX.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kee Marcello"
    },
    {
        "file": "wU470.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "De New Technocrats"
    },
    {
        "file": "wyNYr.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Mind/Matter"
    },
    {
        "file": "X5HDR.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Sven Ratzke"
    },
    {
        "file": "x95aI.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Lamanna & Prxs"
    },
    {
        "file": "xeKGX.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "ylayali"
    },
    {
        "file": "Xf8R0.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "She Pleasures HerSelf"
    },
    {
        "file": "xPwol.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Johanna Augutis"
    },
    {
        "file": "xtJeM.mp3",
        "title": "El amor nos destrozará",
        "artist": "Síbaris"
    },
    {
        "file": "XTzEM.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "#six"
    },
    {
        "file": "XTzpt.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Flowing Tears & Withered Flowers"
    },
    {
        "file": "Xu991.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "RhuneStar 3"
    },
    {
        "file": "y1Csz.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Nina de Koning"
    },
    {
        "file": "Y9iPS.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Chris Farren"
    },
    {
        "file": "Y09UI.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "William Fitzsimmons"
    },
    {
        "file": "Ya4nE.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "PAELLAS"
    },
    {
        "file": "Ya47R.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Trance To The Sun"
    },
    {
        "file": "YdXVh.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Brittany Mitchell"
    },
    {
        "file": "yhCun.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Eric Faria & Deep Fresh & Danny Tape feat.  M.J. Barreto"
    },
    {
        "file": "YivVD.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Dark End"
    },
    {
        "file": "ySbfW.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Paul Young"
    },
    {
        "file": "yScvC.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Union Jack"
    },
    {
        "file": "ytKZY.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "lookpasttheblindinglight"
    },
    {
        "file": "YUNN4.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Loom:ngs"
    },
    {
        "file": "Yyvni.mp3",
        "title": "Love will tear us apart (live)",
        "artist": "Mary Coughlan"
    },
    {
        "file": "Z8buA.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "ssSHEENSss"
    },
    {
        "file": "z8UFP.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Manchester By Piano"
    },
    {
        "file": "zA0hR.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Holy Mountain Drifter"
    },
    {
        "file": "ZcXcX.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Jay-Jay Johanson"
    },
    {
        "file": "zilSY.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Kaycee"
    },
    {
        "file": "zJH7p.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "CHÆMBERS"
    },
    {
        "file": "zMDvg.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Frames"
    },
    {
        "file": "ZmR9U.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Alex Highton"
    },
    {
        "file": "ZmST6.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Hear the Spheres"
    },
    {
        "file": "ZRb2o.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Silver Salamanders"
    },
    {
        "file": "zSCky.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Anything Box"
    },
    {
        "file": "zWyJp.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "Svartsol"
    },
    {
        "file": "zx7cf.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Pocket Gods"
    },
    {
        "file": "ZywDv.mp3",
        "title": "Love Will Tear Us Apart",
        "artist": "The Blue Rubatos"
    }
]//JSON.parse(fs.readFileSync('tracks.json', 'utf8'));
let songIndex = Math.floor(Math.random() * songArr.length);
console.log(songIndex);
console.log(songArr[songIndex].title + ' - ' + songArr[songIndex].artist);
const audioField = document.querySelector("audio");
const titleField = document.querySelector(".song_title");
audioField.setAttribute("src", "../media/sounds/" + songArr[songIndex].file);
audioField.setAttribute("autoplay", "1");
titleField.innerHTML = songArr[songIndex].artist + ' - ' + songArr[songIndex].title;