
const winnerlist = function(req, res){
    res.render('mvp',{
        winners:
        [
            {year:'2013', player:'Jesper "JW" Wecksell', team:'Fnatic'},
            {year:'2014', player:'Jaroslaw "pashaBiceps" Jarzabkowski',  team:'VP'},
            {year:'2014', player:'Adam "friberg" Friberg',  team:'NIP'},
            {year:'2014', player:'Vincent "Happy" Schopenhauer',  team:'LDLC'},
            {year:'2015', player:'Olof "olofmeister" Kajbjer',  team:'Fnatic'},
            {year:'2015', player:'Robin "flusha" Rönnquist',  team:'Fnatic'},
            {year:'2015', player:'Kenny "kennyS" Schrub',  team:'Envy'},
            {year:'2016', player:'Marcelo "coldzera" David',  team:'LG'},
            {year:'2016', player:'Marcelo "coldzera" David',  team:'SK'},
            {year:'2017', player:'Markus "Kjaerbye" Kjaerby',  team:'Astralis'},
            {year:'2017', player:'Dauren "AdreN" Kystaubayev',  team:'Gambit'},
            {year:'2018', player:'Tarik "tarik" Celik',  team:'C9'},
            {year:'2018', player:'Nicolai "device" Reedtz',  team:'Astralis'}
        ]});
};

module.exports = {
    winnerlist
};